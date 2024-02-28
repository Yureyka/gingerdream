import React, { useState } from "react";
import styles from "./Input.module.scss";

export const Input = ({ label, value, onChange, isTextArea }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      {!value && <label className={styles.label}>{label}</label>}
      {isTextArea ? (
        <textarea
          className={styles.input}
          type="text"
          value={value && value}
          onChange={handleChange}
        />
      ) : (
        <input
          className={styles.input}
          type="text"
          value={value && value}
          onChange={handleChange}
        />
      )}
    </div>
  );
};
