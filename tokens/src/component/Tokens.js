import styles from "../assets/css/Tokens.module.scss";

import Rate from "../component/Rate.js";
import React from "react";

const Tokens = (token) => {
  return (
    <div
      key={"Token" + token.props.id}
      className={`${styles.Token} ${token.props.bgColorType}`}
    >
      <div className={styles.Badge}>
        <span>{token.props.badgeName}</span>
      </div>
      <img
        className={styles.TokenImage}
        src={token.props.tokenImage}
        alt={token.props.tokenName}
      />
      <div className={styles.TokenName}>{token.props.tokenName}</div>
      <div className={styles.sub}>
        <span className={styles.GameName}>{token.props.gameName}</span>
        {token.props.tag !== "" && (
          <span className={styles.Tag}>{token.props.tag}</span>
        )}
      </div>
      <div className={styles.TokenBottom}>
        <span className={styles.TokenCost}>${token.props.tokenCost}</span>
        <Rate type={token.props.type} tokenRate={token.props.tokenRate} />
      </div>
    </div>
  );
};

export default Tokens;
