export default function Field({ label, hint, small, children }) {
  return (
    <div style={{ marginBottom: small ? 10 : 18 }}>
      <label style={{ display: "block", fontSize: small ? 13 : 14, fontWeight: 700, marginBottom: 6, color: "#1A2E1A" }}>
        {label}
        {hint && <span style={{ fontWeight: 500, color: "#7A9A7A", fontSize: 13, marginLeft: 6 }}>{hint}</span>}
      </label>
      {children}
    </div>
  );
}
