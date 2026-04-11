import Field from "../components/Field";
import TaskCard from "../components/TaskCard";
import NavBar from "../components/NavBar";
import { styles } from "../styles";
import { TASKS } from "../constants";

export default function TasksPage2({ tasks, setTasks, onBack, onNext, disabled }) {
  return (
    <div style={styles.page}>
      <div style={styles.pageTitle}>Keep <span style={{ color: "#4BAF4F" }}>Going</span></div>
      <p style={styles.pageDesc}>Three more tasks, then ratings.</p>
      {TASKS.slice(3, 6).map(t => (
        <div key={t.num}>
          <TaskCard num={t.num} title={t.title} instruction={t.instruction} />
          <Field label={t.question}>
            <textarea style={styles.textarea} value={tasks[t.num] || ""} onChange={e => setTasks({ ...tasks, [t.num]: e.target.value })} />
          </Field>
        </div>
      ))}
      <NavBar onBack={onBack} onNext={onNext} disabled={disabled} />
    </div>
  );
}
