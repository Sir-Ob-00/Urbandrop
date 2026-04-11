import Field from "../components/Field";
import NavBar from "../components/NavBar";
import { styles } from "../styles";

export default function BugsPage({ bugs, updateBug, onBack, onNext }) {
  return (
    <div style={styles.page}>
      <div style={styles.pageTitle}>Bug <span style={{ color: "#4BAF4F" }}>Reports</span></div>
      <p style={styles.pageDesc}>If something was broken, describe it. Skip if none.</p>
      {bugs.map((b, i) => (
        <div key={i} style={styles.entry}>
          <div style={styles.entryLabel}>Bug {i + 1}</div>
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
      <NavBar onBack={onBack} onNext={onNext} />
    </div>
  );
}
