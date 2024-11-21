import styles from "./Button.module.css";

export type ButtonProps = {
  variant: "primary" | "secondary";
  size: "default" | "auto";
  label: string;
  type?: string;
  onClick?: () => void;
};

export function Button(props: ButtonProps) {
  const { variant, size, onClick, label } = props;

  const variantClass = variant === "primary" ? styles.primaryButton : styles.secondaryButton;
  const sizeClass = size === "default" ? styles.defaultSize : styles.autoSize;

  return (
    <button className={`${styles.commonButton} ${variantClass} ${sizeClass}`} onClick={onClick}>
      {label}
    </button>
  );
}
