import NavBar from "../components/NavBar";
import { styles } from "../styles";
import { RATING_QS } from "../constants";

export default function RatingsPage({ ratings, setRatings, onBack, onNext, disabled }) {
  return (
    <div style={styles.page}>
      <div style={styles.pageTitle}>Rate the <span style={{ color: "#4BAF4F" }}>App</span></div>
      <p style={styles.pageDesc}>1 = Very Poor, 5 = Excellent</p>
      {RATING_QS.map((q, i) => (
        <div key={i} style={{ padding: "14px 0", borderBottom: i < RATING_QS.length - 1 ? "1px solid #E2EADE" : "none" }}>
          <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 10 }}>{q}</div>
          <div style={{ display: "flex", gap: 8 }}>
            {[1, 2, 3, 4, 5].map(n => (
              <button key={n} onClick={() => setRatings({ ...ratings, [i]: n })} style={{ ...styles.rBtn, ...(ratings[i] === n ? styles.rBtnSel : {}) }}>
                {n}
              </button>
            ))}
          </div>
        </div>
      ))}
      <NavBar onBack={onBack} onNext={onNext} disabled={disabled} />
    </div>
  );
}
