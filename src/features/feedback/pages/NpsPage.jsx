import Field from "../components/Field";
import NavBar from "../components/NavBar";
import { styles } from "../styles";

export default function NpsPage({ nps, setNps, npsWhy, setNpsWhy, onBack, onNext, disabled }) {
  return (
    <div style={styles.page}>
      <div style={styles.pageTitle}>Would You <span style={{ color: "#4BAF4F" }}>Recommend</span> Us?</div>
      <p style={styles.pageDesc}>0 to 10, how likely are you to recommend UrbanDrop?</p>
      <div style={{ display: "flex", gap: 5, marginBottom: 8 }}>
        {Array.from({ length: 11 }, (_, i) => (
          <button key={i} onClick={() => setNps(i)} style={{ ...styles.npsBtn, ...(nps === i ? styles.npsBtnSel : {}) }}>
            {i}
          </button>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#7A9A7A", fontWeight: 600, marginBottom: 20 }}>
        <span>Not at all likely</span><span>Extremely likely</span>
      </div>
      <Field label="Why did you give that score?">
        <textarea style={styles.textarea} value={npsWhy} onChange={e => setNpsWhy(e.target.value)} />
      </Field>
      <NavBar onBack={onBack} onNext={onNext} disabled={disabled} />
    </div>
  );
}
