import React from "react";
import styles from "./News.module.css";

export default function News() {
  return (
    <div className={styles.news}>
      <div className={styles.newsDiv}>
        <p>NEWS:</p>
          <img
            className={styles.newsIMG}
            src={require("../../db/img/pyvnagavan.png")}
            alt="news"
          />
        
      </div>
    </div>
  );
}
