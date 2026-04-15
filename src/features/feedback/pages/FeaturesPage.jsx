import Field from "../components/Field";
import NavBar from "../components/NavBar";
import { styles } from "../styles";
import { Trash2 } from "lucide-react";

export default function FeaturesPage({ features, updateFeature, deleteFeature, addFeature, onBack, onNext }) {
  return (
    <div style={styles.page}>
      <div style={styles.pageTitle}>Feature <span style={{ color: "#4BAF4F" }}>Requests</span></div>
      <p style={styles.pageDesc}>What would make you use the app more?</p>
      {features.map((f, i) => (
        <div key={i} style={styles.entry}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={styles.entryLabel}>Idea {i + 1}</div>
            {i > 2 && (
              <button onClick={() => deleteFeature(i)} style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                <Trash2 size={18} color="#c33" strokeWidth={2} />
              </button>
            )}
          </div>
          <Field label="Feature idea" small>
            <input style={styles.input} value={f.idea} onChange={e => updateFeature(i, "idea", e.target.value)} />
          </Field>
          <Field label="Why it matters" small>
            <input style={styles.input} value={f.why} onChange={e => updateFeature(i, "why", e.target.value)} />
          </Field>
        </div>
      ))}
      <button onClick={addFeature} style={{ width: "100%", padding: "12px", marginBottom: 20, border: "2px dashed #E2EADE", borderRadius: 10, background: "#fff", fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 700, color: "#4BAF4F", cursor: "pointer", transition: "all 0.15s" }}>
        + Add Another Feature
      </button>
      <NavBar onBack={onBack} onNext={onNext} />
    </div>
  );
}
