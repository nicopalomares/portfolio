import React from "react";
import styles from "./ModalMio.module.css";

export const ModalMio = ({setShowModal,children}) => {
  return (
    <div className={styles.container} onClick={() => setShowModal(false)}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
