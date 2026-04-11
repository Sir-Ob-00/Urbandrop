import { styles } from "../styles";

export default function TaskCard({ num, title, instruction }) {
  return (
    <div style={styles.taskCard}>
      <div style={styles.taskNum}>Task {num}</div>
      <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 4 }}>{title}</h3>
      <p style={{ fontSize: 14, color: "#4A6A4A" }}>{instruction}</p>
    </div>
  );
}
