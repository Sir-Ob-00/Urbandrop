import { useEffect } from "react";

const styleId = "cyber-button-styles";

const CyberButton = ({ children, onClick, className = "", type = "button", disabled = false }) => {
  useEffect(() => {
    if (document.getElementById(styleId)) return;

    const style = document.createElement("style");
    style.id = styleId;
    style.innerHTML = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700&display=swap');

@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

@keyframes spin {
  from {
    --angle: 0deg;
  }
  to {
    --angle: 360deg;
  }
}

.cyber-button-wrapper {
  position: relative;
  display: inline-block;
}

.cyber-button-glow-ring {
  position: absolute;
  inset: -1px;
  border-radius: 50px;
  background-image: conic-gradient(from var(--angle), #5CB35E, #2F7A4D, #163B2D, #5CB35E);
  animation: spin 2.4s linear infinite;
}

.cyber-button-glow-ring::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50px;
  filter: blur(10px);
  background: inherit;
}

.cyber-button-glow-mask {
  position: absolute;
  inset: 3px;
  border-radius: 44px;
  background: rgba(255, 255, 255, 0.06);
}

.cyber-button {
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 44px;
  color: #e8e0ff;
  font-family: 'Syne', sans-serif;
  padding: 16px 44px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
  outline: none;
}

.cyber-button:disabled {
  filter: grayscale(0.5);
}

.cyber-button:hover {
  transform: scale(1.03);
}

.cyber-button:active {
  transform: scale(0.97);
}

.cyber-button:focus-visible {
  box-shadow: 0 0 0 4px rgba(0, 240, 255, 0.35);
}
`;

    document.head.appendChild(style);

    return () => {
      const existing = document.getElementById(styleId);
      if (existing) {
        existing.remove();
      }
    };
  }, []);

  return (
    <div className={`cyber-button-wrapper ${className}`.trim()}>
      <span className="cyber-button-glow-ring" />
      <span className="cyber-button-glow-mask" />
      <button
        type={type}
        className={`cyber-button ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};

export default CyberButton;
