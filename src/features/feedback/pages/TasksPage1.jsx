import Field from "../components/Field";
import TaskCard from "../components/TaskCard";
import NavBar from "../components/NavBar";
import { styles } from "../styles";
import { TASKS } from "../constants";

export default function TasksPage1({ tasks, setTasks, onBack, onNext, disabled }) {
  return (
    <div style={styles.page}>
      <div style={styles.pageTitle}>Try These <span style={{ color: "#4BAF4F" }}>Tasks</span></div>
      <p style={styles.pageDesc}>Do each task in order. Write your honest reaction.</p>
      {TASKS.slice(0, 3).map(t => (
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
