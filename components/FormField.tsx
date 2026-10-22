import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type BaseProps = {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
};

type InputFieldProps = BaseProps & { as?: "input" } & Omit<InputHTMLAttributes<HTMLInputElement>, "id">;
type TextareaFieldProps = BaseProps & { as: "textarea" } & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id">;

/** Strips the wrapper-only props so the rest can be spread onto the control. */
function controlProps<T extends BaseProps & { as?: string }>(props: T) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { as, label, error, hint, id, required, ...rest } = props;
  return rest;
}

/** Labelled form control with accessible hint and inline error message. */
export function FormField(props: InputFieldProps | TextareaFieldProps) {
  const { id, label, error, hint, required } = props;
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  const shared = {
    id,
    name: id,
    className: "field-control",
    required,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": [hintId, errorId].filter(Boolean).join(" ") || undefined,
  } as const;

  return (
    <div className="field">
      <label htmlFor={id} className="field-label">
        {label}
        {required ? (
          <span className="field-required" aria-hidden="true"> *</span>
        ) : (
          <span className="field-optional"> (optional)</span>
        )}
      </label>
      {props.as === "textarea" ? (
        <textarea rows={5} {...controlProps(props)} {...shared} />
      ) : (
        <input type="text" {...controlProps(props)} {...shared} />
      )}
      {hint && (
        <p id={hintId} className="field-hint">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} className="field-error">
          {error}
        </p>
      )}
    </div>
  );
}
