import clsx from "clsx";
import styles from "./Button.module.scss";

export const Button = ({ onClick, disabled, children }) => {
  return (
    <button
      className={clsx(styles.button, {
        [styles.disabled]: disabled,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
