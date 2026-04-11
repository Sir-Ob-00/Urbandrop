import { styles } from "../styles";

const disabledStyle = { opacity: 0.4, cursor: "not-allowed" };

export default function NavBar({ onBack, onNext, onSubmit, disabled }) {
  return (
    <div style={styles.navBar}>
      {onBack && <button onClick={onBack} style={styles.btnBack}>Back</button>}
      {onNext && (
        <button
          onClick={disabled ? undefined : onNext}
          style={{ ...styles.btnNext, ...(disabled ? disabledStyle : {}) }}
        >
          Next
        </button>
      )}
      {onSubmit && (
        <button
          onClick={disabled ? undefined : onSubmit}
          style={{ ...styles.btnNext, ...(disabled ? disabledStyle : {}) }}
        >
          Submit Feedback
        </button>
      )}
    </div>
  );
}
