import { useState } from "react";
import { TOTAL_PAGES, RATING_QS, THOUGHT_FIELDS, YN_QS } from "./constants";
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
  const [page, setPage] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [details, setDetails] = useState({ name: "", date: new Date().toISOString().split("T")[0], phone: "" });
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

  const go = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const handleSubmit = async () => {
    const data = { details, tasks, ratings, nps, npsWhy, thoughts, bugs, features, yn, oneChange, anythingElse };
    console.log("Submitting feedback:", data);
    
    setLoading(true);
    setError("");
    
    try {
      const response = await fetch("https://urbanchat.kantatech.io/feedbacks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: details.name,
          answers: data
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const result = await response.json();
      console.log("Feedback submitted successfully:", result);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
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

  const isDisabled = {
    0: !details.name.trim() || !details.phone.trim(),
    1: [1, 2, 3].some(n => !tasks[n]?.trim()),
    2: [4, 5, 6].some(n => !tasks[n]?.trim()),
    3: Object.keys(ratings).length < RATING_QS.length,
    4: nps === null,
    5: THOUGHT_FIELDS.some(f => !thoughts[f.key]?.trim()),
    6: false,
    7: false,
    8: Object.keys(yn).length < YN_QS.length,
  }[page] ?? false;

  const progress = ((page + 1) / TOTAL_PAGES) * 100;

  if (submitted) return <SuccessScreen />;

  return (
    <div style={styles.wrapper}>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      <div style={styles.topBar}>
        <div style={styles.logo}>Urban<span style={{ color: "#4BAF4F" }}>Drop</span></div>
        <div style={styles.stepCount}>{page + 1} / {TOTAL_PAGES}</div>
      </div>

      <div style={styles.progressTrack}>
        <div style={{ ...styles.progressFill, width: `${progress}%` }} />
      </div>

      {page === 0 && <WelcomePage details={details} setDetails={setDetails} onNext={() => go(1)} disabled={isDisabled} />}
      {page === 1 && <TasksPage1 tasks={tasks} setTasks={setTasks} onBack={() => go(0)} onNext={() => go(2)} disabled={isDisabled} />}
      {page === 2 && <TasksPage2 tasks={tasks} setTasks={setTasks} onBack={() => go(1)} onNext={() => go(3)} disabled={isDisabled} />}
      {page === 3 && <RatingsPage ratings={ratings} setRatings={setRatings} onBack={() => go(2)} onNext={() => go(4)} disabled={isDisabled} />}
      {page === 4 && <NpsPage nps={nps} setNps={setNps} npsWhy={npsWhy} setNpsWhy={setNpsWhy} onBack={() => go(3)} onNext={() => go(5)} disabled={isDisabled} />}
      {page === 5 && <ThoughtsPage thoughts={thoughts} setThoughts={setThoughts} onBack={() => go(4)} onNext={() => go(6)} disabled={isDisabled} />}
      {page === 6 && <BugsPage bugs={bugs} updateBug={updateBug} deleteBug={deleteBug} addBug={addBug} onBack={() => go(5)} onNext={() => go(7)} />}
      {page === 7 && <FeaturesPage features={features} updateFeature={updateFeature} onBack={() => go(6)} onNext={() => go(8)} />}
      {page === 8 && <FinalPage yn={yn} setYn={setYn} oneChange={oneChange} setOneChange={setOneChange} anythingElse={anythingElse} setAnythingElse={setAnythingElse} onBack={() => go(7)} onSubmit={handleSubmit} disabled={isDisabled} loading={loading} error={error} />}
    </div>
  );
}
