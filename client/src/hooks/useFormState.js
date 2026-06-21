import { useState } from "react";

// Terminal intake form field state + lightweight validation.
const REQUIRED_FIELDS = ["name", "email", "message"];

export function useFormState(initial = {}) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});

  function setField(name, value) {
    setValues((v) => ({ ...v, [name]: value }));
  }

  function validate() {
    const next = {};
    REQUIRED_FIELDS.forEach((field) => {
      if (!values[field] || String(values[field]).trim() === "") {
        next[field] = "required";
      }
    });
    if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) {
      next.email = "invalid email";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  return { values, errors, setField, validate };
}
