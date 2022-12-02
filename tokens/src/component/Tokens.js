import styles from "../assets/css/Tokens.module.scss";

import Rate from "../component/Rate.js";
import React from "react";

const Tokens = (token) => {
  return (
    <div
      key={"Token" + token.props.id}
      className={`${styles.token} ${styles[token.props.bgColorType]}`}
    >
      <div className={styles.badge}>
        <span>{token.props.badgeName}</span>
      </div>
      <img
        className={styles.tokenImage}
        src={token.props.tokenImage}
        alt={token.props.tokenName}
      />
      <div className={styles.tokenName}>{token.props.tokenName}</div>
      <div className={styles.sub}>
        <span className={styles.gameName}>{token.props.gameName}</span>
        {token.props.tag !== "" && (
          <span className={styles.tag}>{token.props.tag}</span>
        )}
      </div>
      <div className={styles.tokenBottom}>
        <span className={styles.tokenCost}>${token.props.tokenCost}</span>
        <Rate type={token.props.type} tokenRate={token.props.tokenRate} />
      </div>
    </div>
  );
};

export default Tokens;
