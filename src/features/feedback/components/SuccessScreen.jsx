import { styles } from "../styles";
import { useEffect } from "react";

export default function SuccessScreen({ elapsedTime, countdown }) {
  useEffect(() => {
    document.documentElement.style.overflowX = "visible";
    document.body.style.overflowX = "visible";
    return () => {
      document.documentElement.style.overflowX = "";
      document.body.style.overflowX = "";
    };
  }, []);
  const progressPercent = (elapsedTime / 5000) * 100;
  const backgroundImageUrl = new URL('../../../assets/images/beta/beta-background.jpeg', import.meta.url).href;

  return (
    <>
      <div style={{ backgroundImage: `url('${backgroundImageUrl}')`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", position: "fixed", inset: 0, width: "100vw", height: "100vh", zIndex: -1 }} />
      <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <div style={{ ...styles.wrapper, margin: "40px auto" }}>
        <div style={styles.topBar}>
        <div style={styles.logo}>Urban<span style={{ color: "#4BAF4F" }}>Drop</span></div>
        <div style={styles.stepCount}>Done</div>
      </div>
      <div style={{ ...styles.progressTrack, marginBottom: 0 }}>
        <div style={{ ...styles.progressFill, width: "100%" }} />
      </div>
      <div style={styles.success}>
        <div style={styles.successCheck}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#4BAF4F" strokeWidth="2.5" strokeLinecap="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 8 }}>Feedback received</h2>
        <p style={{ color: "#4A6A4A", fontSize: 15 }}>Thanks for your time. This directly shapes what we build next.</p>
        
        <div style={{ width: "100%", marginTop: 30 }}>
          <div style={{ height: 6, background: "#E2EADE", borderRadius: 3, overflow: "hidden", marginBottom: 8 }}>
            <div style={{ height: "100%", background: "#4BAF4F", width: `${Math.min(progressPercent, 100)}%`, transition: "width 0.05s linear" }} />
          </div>
          <p style={{ color: "#7A9A7A", fontSize: 13, textAlign: "center" }}>Redirecting in {countdown} second{countdown !== 1 ? "s" : ""}...</p>
        </div>
        </div>
        </div>
      </div>
    </>
  );
}
