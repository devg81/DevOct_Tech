import { useState } from "react";
import { useFormState } from "../../hooks/useFormState.js";
import TerminalField from "../ui/TerminalField.jsx";
import Button from "../ui/Button.jsx";

const BUDGETS = ["< $10k", "$10k–$50k", "$50k+", "not sure yet"];

export default function LeadGenTerminal() {
  const { values, errors, setField, validate } = useFormState({
    name: "",
    email: "",
    budget: BUDGETS[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    const apiUrl = import.meta.env.VITE_API_URL || "";
    await fetch(`${apiUrl}/api/intake`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    }).catch(() => {});

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="lead-terminal lead-terminal--done">
        <p>// message received — we reply within one business day</p>
      </div>
    );
  }

  return (
    <form className="lead-terminal" onSubmit={handleSubmit}>
      <p className="lead-terminal__prompt">// start a project</p>
      <TerminalField label="name" value={values.name} onChange={(v) => setField("name", v)} error={errors.name} />
      <TerminalField label="email" type="email" value={values.email} onChange={(v) => setField("email", v)} error={errors.email} />
      <TerminalField label="budget" type="select" options={BUDGETS} value={values.budget} onChange={(v) => setField("budget", v)} />
      <TerminalField label="message" type="textarea" value={values.message} onChange={(v) => setField("message", v)} error={errors.message} />
      <Button type="submit">send →</Button>
    </form>
  );
}
