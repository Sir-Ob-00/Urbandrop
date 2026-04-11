import Field from "../components/Field";
import NavBar from "../components/NavBar";
import { styles } from "../styles";
import { THOUGHT_FIELDS } from "../constants";

export default function ThoughtsPage({ thoughts, setThoughts, onBack, onNext, disabled }) {
  return (
    <div style={styles.page}>
      <div style={styles.pageTitle}>Your <span style={{ color: "#4BAF4F" }}>Thoughts</span></div>
      <p style={styles.pageDesc}>Say as much or as little as you like.</p>
      {THOUGHT_FIELDS.map(f => (
        <Field key={f.key} label={f.label}>
          <textarea style={styles.textarea} value={thoughts[f.key] || ""} onChange={e => setThoughts({ ...thoughts, [f.key]: e.target.value })} />
        </Field>
      ))}
      <NavBar onBack={onBack} onNext={onNext} disabled={disabled} />
    </div>
  );
}
