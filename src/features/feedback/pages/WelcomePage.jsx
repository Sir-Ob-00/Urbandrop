import Field from "../components/Field";
import NavBar from "../components/NavBar";
import { styles } from "../styles";

export default function WelcomePage({ details, setDetails, onNext, disabled }) {
  return (
    <div style={styles.page}>
      <div style={styles.pageTitle}>Beta <span style={{ color: "#4BAF4F" }}>Feedback</span></div>
      <p style={styles.pageDesc}>Help us shape UrbanDrop. About 10 minutes.</p>
      <div style={styles.callout}>
        <strong>Before you start:</strong> Open the UrbanDrop app on your phone. Go through each task at your own pace. There are no wrong answers. If something is confusing, broken, or annoying, tell us.
      </div>
      <div style={{ marginTop: 24 }}>
        <Field label="Your name">
          <input style={styles.input} value={details.name} onChange={e => setDetails({ ...details, name: e.target.value })} placeholder="Full name" />
        </Field>
        <Field label="Date">
          <input style={styles.input} type="date" value={details.date} onChange={e => setDetails({ ...details, date: e.target.value })} />
        </Field>
        <Field label="Phone model" hint="e.g. iPhone 14, Samsung S23">
          <input style={styles.input} value={details.phone} onChange={e => setDetails({ ...details, phone: e.target.value })} placeholder="Your device" />
        </Field>
      </div>
      <NavBar onNext={onNext} disabled={disabled} />
    </div>
  );
}
