import React from "react";
import styles from "./ViewToggle.module.css";

const ViewToggle = ({ isControllerEnabled, toggleController }) => {
  return (
    <div className={styles.viewToggle}>
      <button onClick={toggleController}>
        {isControllerEnabled ? "Disable Controller" : "Enable Controller"}
      </button>
    </div>
  );
};

export default ViewToggle;
