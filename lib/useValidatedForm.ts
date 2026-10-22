"use client";

import { useCallback, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { hasErrors, type FieldErrors } from "@/lib/validation";

/**
 * Small reusable form-state hook: tracks values, validates on submit (and live
 * after the first attempt), and moves focus to the first invalid field.
 */
export function useValidatedForm<T extends Record<string, string>>(
  initialValues: T,
  validate: (values: T) => FieldErrors<Extract<keyof T, string>>,
) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FieldErrors<Extract<keyof T, string>>>({});
  const attempted = useRef(false);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = event.target;
      setValues((prev) => {
        const next = { ...prev, [name]: value };
        if (attempted.current) setErrors(validate(next));
        return next;
      });
    },
    [validate],
  );

  const handleSubmit = useCallback(
    (onValid: (values: T) => void) => (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      attempted.current = true;
      const nextErrors = validate(values);
      setErrors(nextErrors);
      if (hasErrors(nextErrors)) {
        const firstInvalid = Object.keys(values).find(
          (key) => nextErrors[key as Extract<keyof T, string>],
        );
        if (firstInvalid) {
          event.currentTarget.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
        }
        return;
      }
      onValid(values);
    },
    [validate, values],
  );

  return { values, errors, handleChange, handleSubmit };
}
