import styles from "../assets/css/Tokens.module.scss";
import React from "react";

const Tokens = () => {
  return (
    <div className={styles.border}>
      <div className={styles.Token}>
        <div className={styles.Badge}>
          <span>Top Gainer</span>
        </div>
        <img className={styles.TokenImage} alt="" />
        <span className={styles.TokenName}>DRACO</span>
        <div className={styles.sub}>
          <span className={styles.GameName}>MIR4</span>
          <span className={styles.Tag}></span>
        </div>
        {/* 구분선 */}
        <div className={styles.TokenBottom}>
          <span className={styles.TokenCost}>$1.9312</span>
          <span className={styles.Rate}>+9.66%</span>
        </div>
      </div>
    </div>
  );
};

export default Tokens;
