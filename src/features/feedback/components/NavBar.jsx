import { styles } from "../styles";

const disabledStyle = { opacity: 0.4, cursor: "not-allowed" };

export default function NavBar({ onBack, onNext, onSubmit, disabled, loading }) {
  return (
    <div style={styles.navBar}>
      {onBack && <button onClick={onBack} style={styles.btnBack} disabled={loading}>Back</button>}
      {onNext && (
        <button
          onClick={disabled ? undefined : onNext}
          style={{ ...styles.btnNext, ...(disabled ? disabledStyle : {}) }}
          disabled={disabled || loading}
        >
          Next
        </button>
      )}
      {onSubmit && (
        <button
          onClick={disabled ? undefined : onSubmit}
          style={{ ...styles.btnNext, ...(disabled || loading ? disabledStyle : {}) }}
          disabled={disabled || loading}
        >
          {loading ? "Submitting..." : "Submit Feedback"}
        </button>
      )}
    </div>
  );
}
