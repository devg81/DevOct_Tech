export default function TerminalField({ label, type = "text", value, onChange, error, options }) {
  return (
    <label className="terminal-field">
      <span className="terminal-field__label">{label}</span>
      {type === "select" ? (
        <select
          className="terminal-field__input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          className="terminal-field__input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={4}
        />
      ) : (
        <input
          className="terminal-field__input"
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
      {error && <span className="terminal-field__error">{error}</span>}
    </label>
  );
}
