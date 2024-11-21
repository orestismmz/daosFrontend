import React from "react";
import styles from "./Input.module.css";

export type InputProps = {
  label: string;
  type: string;
  placeholder: string;
  value: string | undefined;
  name: string;
  error?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Input(props: InputProps) {
  const { error, label, type, placeholder, value, name, onChange } = props;

  return (
    <div className={styles.inputTextContainer}>
      <label className={styles.label}>{label}</label>
      <input
        type={type}
        name={name}
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <span className={styles.span}>{error}</span>
    </div>
  );
}
