import React, { useEffect, useState, useRef } from "react";
import styles from "./IaModal.module.css";
import Lottie from "lottie-react";
import ai from "../../assets/lottie/ai.json";

export default function IaModal({ text }) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("iaModalClosed");
    if (!alreadySeen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.showModal();
    } else if (dialogRef.current) {
      dialogRef.current.close();
    }
  }, [isOpen]);
  if (!isOpen) return null;
  const handleClose = () => {
    sessionStorage.setItem("iaModalClosed", "true");
    setIsOpen(false);
  };

  return (
    <dialog ref={dialogRef} className={styles.modal}>
      <section className={styles.modalContent}>
        <button className={styles.closeButton} onClick={handleClose}>
          &times;
        </button>
        <div className={styles.modalIa}>
          <Lottie animationData={ai} style={{ width: "50%", height: "50%" }} />
        </div>
        <div className={styles.modalHeader}>
          <h2>{text["iaModal.title"]}</h2>
        </div>
        <div className={styles.modalBody}>
          <p>{text["iaModal.description"]}</p>
          <ul>
            <li>{text["iaModal.item1"]}</li>
            <li>{text["iaModal.item2"]}</li>
            <li>{text["iaModal.item3"]}</li>
          </ul>
          <a href="/contacto" className={styles.ctaButton}>
            {text["iaModal.cta"]}
          </a>
        </div>
      </section>
    </dialog>
  );
}
