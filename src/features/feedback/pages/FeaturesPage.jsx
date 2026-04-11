import Field from "../components/Field";
import NavBar from "../components/NavBar";
import { styles } from "../styles";

export default function FeaturesPage({ features, updateFeature, onBack, onNext }) {
  return (
    <div style={styles.page}>
      <div style={styles.pageTitle}>Feature <span style={{ color: "#4BAF4F" }}>Requests</span></div>
      <p style={styles.pageDesc}>What would make you use the app more?</p>
      {features.map((f, i) => (
        <div key={i} style={styles.entry}>
          <div style={styles.entryLabel}>Idea {i + 1}</div>
          <Field label="Feature idea" small>
            <input style={styles.input} value={f.idea} onChange={e => updateFeature(i, "idea", e.target.value)} />
          </Field>
          <Field label="Why it matters" small>
            <input style={styles.input} value={f.why} onChange={e => updateFeature(i, "why", e.target.value)} />
          </Field>
        </div>
      ))}
      <NavBar onBack={onBack} onNext={onNext} />
    </div>
  );
}
