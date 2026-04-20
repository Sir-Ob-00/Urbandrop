import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TOTAL_PAGES, RATING_QS, THOUGHT_FIELDS, YN_QS, TASKS } from "./constants";
import { styles } from "./styles";
import SuccessScreen from "./components/SuccessScreen";
import WelcomePage from "./pages/WelcomePage";
import TasksPage1 from "./pages/TasksPage1";
import TasksPage2 from "./pages/TasksPage2";
import RatingsPage from "./pages/RatingsPage";
import NpsPage from "./pages/NpsPage";
import ThoughtsPage from "./pages/ThoughtsPage";
import BugsPage from "./pages/BugsPage";
import FeaturesPage from "./pages/FeaturesPage";
import FinalPage from "./pages/FinalPage";

export default function UrbanDropFeedback() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [savingProgress, setSavingProgress] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [pendingNavigation, setPendingNavigation] = useState(null);
  const [details, setDetails] = useState({ name: "", email: "", phone: "" });
  const [tasks, setTasks] = useState({});
  const [ratings, setRatings] = useState({});
  const [nps, setNps] = useState(null);
  const [npsWhy, setNpsWhy] = useState("");
  const [thoughts, setThoughts] = useState({});
  const [bugs, setBugs] = useState([{ what: "", where: "", expect: "" }, { what: "", where: "", expect: "" }, { what: "", where: "", expect: "" }]);
  const [features, setFeatures] = useState([{ idea: "", why: "" }, { idea: "", why: "" }, { idea: "", why: "" }]);
  const [yn, setYn] = useState({});
  const [oneChange, setOneChange] = useState("");
  const [anythingElse, setAnythingElse] = useState("");
  const [elapsedTime, setElapsedTime] = useState(0);

  const go = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

  useEffect(() => {
    document.documentElement.style.overflowX = "visible";
    document.body.style.overflowX = "visible";
    return () => {
      document.documentElement.style.overflowX = "";
      document.body.style.overflowX = "";
    };
  }, []);

  useEffect(() => {
    if (submitted) {
      const startTime = Date.now();
      
      const elapsedTimer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        if (elapsed >= 5000) {
          navigate("/");
        } else {
          setElapsedTime(elapsed);
        }
      }, 50);
      
      return () => clearInterval(elapsedTimer);
    }
  }, [submitted, navigate]);

  const countdown = Math.ceil((5000 - elapsedTime) / 1000);

  const getPageData = (pageNum) => {
    switch (pageNum) {
      case 0:
        return { details };
      case 1:
        return {
          tasks: TASKS.slice(0, 3).map((task, idx) => ({
            question: task.question,
            answer: tasks[idx + 1] ?? "",
          })),
        };
      case 2:
        return {
          tasks: TASKS.slice(3, 6).map((task, idx) => ({
            question: task.question,
            answer: tasks[idx + 4] ?? "",
          })),
        };
      case 3:
        return {
          ratings: RATING_QS.map((question, index) => ({
            question,
            answer: ratings[index] ?? null,
          })),
        };
      case 4:
        return {
          nps: {
            question: "How likely are you to recommend UrbanDrop to a friend?",
            answer: nps,
          },
          npsWhy: {
            question: "Why did you choose that rating?",
            answer: npsWhy,
          },
        };
      case 5:
        return {
          thoughts: THOUGHT_FIELDS.map((field) => ({
            question: field.label,
            answer: thoughts[field.key] ?? "",
          })),
        };
      case 6:
        return {
          bugs: bugs
            .filter((bug) => bug.what || bug.where || bug.expect)
            .map((bug) => ({
              what: { question: "What happened?", answer: bug.what },
              where: { question: "Where in the app?", answer: bug.where },
              expect: { question: "What did you expect?", answer: bug.expect },
            })),
        };
      case 7:
        return {
          features: features
            .filter((feature) => feature.idea || feature.why)
            .map((feature) => ({
              idea: { question: "What's your feature idea?", answer: feature.idea },
              why: { question: "Why would this be useful?", answer: feature.why },
            })),
        };
      case 8:
        return {
          yn: YN_QS.map((question, index) => ({
            question,
            answer: yn[index] ?? null,
          })),
          oneChange: {
            question: "If you could change one thing, what would it be?",
            answer: oneChange,
          },
          anythingElse: {
            question: "Anything else you'd like to tell us?",
            answer: anythingElse,
          },
        };
      default:
        return {};
    }
  };

  const getAccumulatedPageData = (upToPage) => {
    const accumulated = {};
    for (let i = 0; i <= upToPage; i++) {
      const pageData = getPageData(i);
      Object.assign(accumulated, pageData);
    }
    return accumulated;
  };

  const saveProgress = async (currentPage) => {
    if (!details.email) {
      setSaveError("Email is required to save progress");
      return false;
    }

    setSavingProgress(true);
    setSaveError("");

    try {
      const accumulatedData = getAccumulatedPageData(currentPage);

      const response = await fetch("https://urbandrop-dev.kantatech.io/feedbacks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: details.email,
          answers: accumulatedData,
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const result = await response.json();
      console.log("Progress saved successfully:", result);
      setSavingProgress(false);
      return true;
    } catch (err) {
      console.error("Save progress error:", err);
      setSaveError("Failed to save progress. Please click retry.");
      setSavingProgress(false);
      return false;
    }
  };

  const goNext = async (nextPage) => {
    const currentPage = page;
    const saveSuccess = await saveProgress(currentPage);

    if (saveSuccess) {
      setPendingNavigation(null);
      go(nextPage);
    } else {
      setPendingNavigation(nextPage);
    }
  };

  const retryNavigation = () => {
    if (pendingNavigation !== null) {
      goNext(pendingNavigation);
    }
  };

  const transformFeedbackData = () => {
    // Transform ratings with questions
    const ratingsWithQuestions = RATING_QS.map((question, index) => ({
      question,
      answer: ratings[index] ?? null,
    }));

    // Transform tasks with questions
    const tasksWithQuestions = TASKS.map((task, index) => ({
      question: task.question,
      answer: tasks[index + 1] ?? "",
    }));

    // Transform thoughts with questions
    const thoughtsWithQuestions = THOUGHT_FIELDS.map((field) => ({
      question: field.label,
      answer: thoughts[field.key] ?? "",
    }));

    // Transform yes/no questions with questions
    const ynWithQuestions = YN_QS.map((question, index) => ({
      question,
      answer: yn[index] ?? null,
    }));

    // Transform bugs with questions for each field
    const bugsWithQuestions = bugs
      .filter((bug) => bug.what || bug.where || bug.expect)
      .map((bug) => ({
        what: { question: "What happened?", answer: bug.what },
        where: { question: "Where in the app?", answer: bug.where },
        expect: { question: "What did you expect?", answer: bug.expect },
      }));

    // Transform features with questions for each field
    const featuresWithQuestions = features
      .filter((feature) => feature.idea || feature.why)
      .map((feature) => ({
        idea: { question: "What's your feature idea?", answer: feature.idea },
        why: { question: "Why would this be useful?", answer: feature.why },
      }));

    return {
      details,
      tasks: tasksWithQuestions,
      ratings: ratingsWithQuestions,
      nps: {
        question: "How likely are you to recommend UrbanDrop to a friend?",
        answer: nps,
      },
      npsWhy: {
        question: "Why did you choose that rating?",
        answer: npsWhy,
      },
      thoughts: thoughtsWithQuestions,
      bugs: bugsWithQuestions,
      features: featuresWithQuestions,
      yn: ynWithQuestions,
      oneChange: {
        question: "If you could change one thing, what would it be?",
        answer: oneChange,
      },
      anythingElse: {
        question: "Anything else you'd like to tell us?",
        answer: anythingElse,
      },
    };
  };

  const handleSubmit = async () => {
    const transformedData = transformFeedbackData();
    console.log("Submitting feedback:", transformedData);
    
    setLoading(true);
    setError("");
    
    try {
      const response = await fetch("https://urbandrop-dev.kantatech.io/feedbacks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: details.email,
          answers: transformedData
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const result = await response.json();
      console.log("Feedback submitted successfully:", result);
      
      if (result.status === "SUCCESS") {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        throw new Error(result.message || "Unexpected response from server");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError("Failed to submit feedback. Please try again.");
      setLoading(false);
    }
  };

  const updateBug = (i, field, val) => { const b = [...bugs]; b[i] = { ...b[i], [field]: val }; setBugs(b); };
  const addBug = () => { setBugs([...bugs, { what: "", where: "", expect: "" }]); };
  const deleteBug = (i) => { if (i > 2) { setBugs(bugs.filter((_, idx) => idx !== i)); } };
  const updateFeature = (i, field, val) => { const f = [...features]; f[i] = { ...f[i], [field]: val }; setFeatures(f); };
  const addFeature = () => { setFeatures([...features, { idea: "", why: "" }]); };
  const deleteFeature = (i) => { if (i > 2) { setFeatures(features.filter((_, idx) => idx !== i)); } };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isDisabled = {
    0: !details.name.trim() || !details.email.trim() || !details.phone.trim() || !isValidEmail(details.email),
    1: [1, 2, 3].some(n => !tasks[n]?.trim()),
    2: [4, 5, 6].some(n => !tasks[n]?.trim()),
    3: Object.keys(ratings).length < RATING_QS.length,
    4: nps === null,
    5: false,
    6: false,
    7: false,
    8: Object.keys(yn).length < YN_QS.length,
  }[page] ?? false;

  const progress = ((page + 1) / TOTAL_PAGES) * 100;

  if (submitted) return <SuccessScreen elapsedTime={elapsedTime} countdown={countdown} />;

  const backgroundImageUrl = new URL('../../assets/images/beta/beta-background.jpeg', import.meta.url).href;
  const logoUrl = new URL('../../assets/images/logo-1.png', import.meta.url).href;

  return (
    <>
      <div style={{ backgroundImage: `url('${backgroundImageUrl}')`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", position: "fixed", inset: 0, width: "100vw", height: "100vh", zIndex: -1 }} />
      <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <div style={{ ...styles.wrapper, margin: "40px auto" }}>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      <div style={styles.topBar}>
        <div style={{ ...styles.logo, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <img src={logoUrl} alt="UrbanDrop" style={{ height: 28, width: 28 }} />
          <div style={{ fontWeight: "bold" }}>Urban<span style={{ color: "#4BAF4F" }}>Drop</span></div>
        </div>
        <div style={styles.stepCount}>{page + 1} / {TOTAL_PAGES}</div>
      </div>

      <div style={styles.progressTrack}>
        <div style={{ ...styles.progressFill, width: `${progress}%` }} />
      </div>

      {savingProgress && (
        <div style={{ textAlign: "center", padding: "12px", backgroundColor: "#E8F5E9", color: "#2E7D32", borderRadius: 8, marginBottom: 16, fontSize: 14 }}>
          💾 Saving your progress...
        </div>
      )}

      {saveError && (
        <div style={{ padding: "12px", backgroundColor: "#FFEBEE", color: "#C62828", borderRadius: 8, marginBottom: 16, fontSize: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>⚠️ {saveError}</span>
          <button onClick={retryNavigation} style={{ padding: "6px 12px", backgroundColor: "#C62828", color: "white", border: "none", borderRadius: 4, cursor: "pointer", fontSize: 12, fontWeight: "bold" }}>
            Retry
          </button>
        </div>
      )}

      {page === 0 && <WelcomePage details={details} setDetails={setDetails} onNext={() => goNext(1)} disabled={isDisabled} />}
      {page === 1 && <TasksPage1 tasks={tasks} setTasks={setTasks} onBack={() => go(0)} onNext={() => goNext(2)} disabled={isDisabled} />}
      {page === 2 && <TasksPage2 tasks={tasks} setTasks={setTasks} onBack={() => go(1)} onNext={() => goNext(3)} disabled={isDisabled} />}
      {page === 3 && <RatingsPage ratings={ratings} setRatings={setRatings} onBack={() => go(2)} onNext={() => goNext(4)} disabled={isDisabled} />}
      {page === 4 && <NpsPage nps={nps} setNps={setNps} npsWhy={npsWhy} setNpsWhy={setNpsWhy} onBack={() => go(3)} onNext={() => goNext(5)} disabled={isDisabled} />}
      {page === 5 && <ThoughtsPage thoughts={thoughts} setThoughts={setThoughts} onBack={() => go(4)} onNext={() => goNext(6)} disabled={isDisabled} />}
      {page === 6 && <BugsPage bugs={bugs} updateBug={updateBug} deleteBug={deleteBug} addBug={addBug} onBack={() => go(5)} onNext={() => goNext(7)} />}
      {page === 7 && <FeaturesPage features={features} updateFeature={updateFeature} deleteFeature={deleteFeature} addFeature={addFeature} onBack={() => go(6)} onNext={() => goNext(8)} />}
      {page === 8 && <FinalPage yn={yn} setYn={setYn} oneChange={oneChange} setOneChange={setOneChange} anythingElse={anythingElse} setAnythingElse={setAnythingElse} onBack={() => go(7)} onSubmit={handleSubmit} disabled={isDisabled} loading={loading} error={error} />}
      </div>
      </div>
    </>
  );
}
