import Field from "../components/Field";
import NavBar from "../components/NavBar";
import { styles } from "../styles";
import { Trash2 } from "lucide-react";

export default function BugsPage({ bugs, updateBug, deleteBug, addBug, onBack, onNext }) {
  return (
    <div style={styles.page}>
      <div style={styles.pageTitle}>Issues &amp; <span style={{ color: "#4BAF4F" }}>Problems</span></div>
      <p style={styles.pageDesc}>If something didn't work as expected, tell us. Skip if none.</p>
      {bugs.map((b, i) => (
        <div key={i} style={styles.entry}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={styles.entryLabel}>Issue {i + 1}</div>
            {i > 2 && (
              <button onClick={() => deleteBug(i)} style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                <Trash2 size={18} color="#c33" strokeWidth={2} />
              </button>
            )}
          </div>
          <Field label="What happened?" small>
            <input style={styles.input} value={b.what} onChange={e => updateBug(i, "what", e.target.value)} />
          </Field>
          <Field label="Which screen?" small>
            <input style={styles.input} value={b.where} onChange={e => updateBug(i, "where", e.target.value)} />
          </Field>
          <Field label="What did you expect?" small>
            <input style={styles.input} value={b.expect} onChange={e => updateBug(i, "expect", e.target.value)} />
          </Field>
        </div>
      ))}
      <button onClick={addBug} style={{ width: "100%", padding: "12px", marginBottom: 20, border: "2px dashed #E2EADE", borderRadius: 10, background: "#fff", fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 700, color: "#4BAF4F", cursor: "pointer", transition: "all 0.15s" }}>
        + Add Another Issue
      </button>
      <NavBar onBack={onBack} onNext={onNext} />
    </div>
  );
}
