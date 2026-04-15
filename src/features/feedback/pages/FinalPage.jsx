import Field from "../components/Field";
import NavBar from "../components/NavBar";
import { styles } from "../styles";
import { YN_QS } from "../constants";

export default function FinalPage({ yn, setYn, oneChange, setOneChange, anythingElse, setAnythingElse, onBack, onSubmit, disabled, loading, error }) {
  return (
    <div style={styles.page}>
      <div style={styles.pageTitle}>Final <span style={{ color: "#4BAF4F" }}>Questions</span></div>
      <p style={styles.pageDesc}>Nearly done. A few quick yes/no questions.</p>
      {error && (
        <div style={{ background: "#fee", border: "1px solid #fcc", borderRadius: 10, padding: "12px 14px", fontSize: 14, color: "#c33", marginBottom: 20 }}>
          {error}
        </div>
      )}
      {YN_QS.map((q, i) => (
        <div key={i} style={{ padding: "14px 0", borderBottom: i < YN_QS.length - 1 ? "1px solid #E2EADE" : "none" }}>
          <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 10 }}>{q}</div>
          <div style={{ display: "flex", gap: 8 }}>
            {["Yes", "No", "Not Sure"].map(o => (
              <button key={o} onClick={() => setYn({ ...yn, [i]: o })} style={{ ...styles.ynBtn, ...(yn[i] === o ? styles.ynBtnSel : {}) }}>
                {o}
              </button>
            ))}
          </div>
        </div>
      ))}
      <div style={{ marginTop: 20 }}>
        <Field label="If you could change one thing about the app, what would it be?">
          <textarea style={styles.textarea} value={oneChange} onChange={e => setOneChange(e.target.value)} />
        </Field>
        <Field label="Anything else you want to tell us?">
          <textarea style={styles.textarea} value={anythingElse} onChange={e => setAnythingElse(e.target.value)} />
        </Field>
      </div>
      <NavBar onBack={onBack} onSubmit={onSubmit} disabled={disabled} loading={loading} />
    </div>
  );
}
