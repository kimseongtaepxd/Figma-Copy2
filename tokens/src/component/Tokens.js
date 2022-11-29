import styles from "../assets/css/Tokens.module.scss";
import debco from "../assets/img/img_debco.png";
import draco from "../assets/img/img_draco.png";
import reflect from "../assets/img/img_reflect.png";
import tig from "../assets/img/img_tig.png";
import tornado from "../assets/img/img_tornado.png";

import React from "react";

const Tokens = () => {
  const token = [
    {
      id: 1,
      bgColor:
        "radial-gradient(85.21% 85.21% at 50% -17.61%, rgba(172, 30, 255, 0.137129) 0%, rgba(172, 30, 255, 0.2) 0%, rgba(172, 30, 255, 0.126621) 0%, rgba(172, 30, 255, 0) 100%), rgba(255, 255, 255, 0.05)",
      badgeName: "TOP Gainer",
      tokenImage: draco,
      tokenName: "DRACO",
      gameName: "MIR4",
      tag: "",
      tokenCost: 1.9312,
      tokenRate: 9.66,
    },
    {
      id: 2,
      badgeName: "Top Loser",
      bgColor:
        "radial-gradient(85.21% 85.21% at 50% -17.61%, rgba(188, 63, 51, 0.2) 0%, rgba(188, 63, 51, 0) 100%), rgba(255, 255, 255, 0.05)",
      tokenImage: tornado,
      tokenName: "TORNADO",
      gameName: "CrypTornado",
      tag: "+2",
      tokenCost: 1.9312,
      tokenRate: 9.66,
    },
    {
      id: 3,
      badgeName: "Recentlry Added",
      bgColor:
        "radial-gradient(85.21% 85.21% at 50% -17.61%, rgba(204, 0, 72, 0.2) 0%, rgba(204, 0, 72, 0) 100%), rgba(255, 255, 255, 0.05)",
      tokenImage: debco,
      tokenName: "DEBCO",
      gameName: "Dark Eden M",
      tag: "",
      tokenCost: 1.9312,
      tokenRate: 9.66,
    },
    {
      id: 4,
      badgeName: "Top ROI",
      bgColor:
        "radial-gradient(85.21% 85.21% at 50% -17.61%, rgba(46, 220, 178, 0.2) 0%, rgba(46, 220, 178, 0) 100%), rgba(255, 255, 255, 0.05)",
      tokenImage: reflect,
      tokenName: "REFLECT",
      gameName: "MIR4",
      tag: "+2",
      tokenCost: 1.9312,
      tokenRate: 9.66,
    },
    {
      id: 5,
      badgeName: "Most Played",
      bgColor:
        " radial-gradient(85.21% 85.21% at 50% -17.61%, rgba(199, 115, 38, 0.2) 0%, rgba(199, 115, 38, 0) 100%), rgba(255, 255, 255, 0.05)",
      tokenImage: tig,
      tokenName: "TIG",
      gameName: "YULGANG GLOBAL",
      tag: "",
      tokenCost: 1.9312,
      tokenRate: 9.66,
    },
  ];

  return (
    <>
      <div className="Tokens">
        {token.map((token) => (
          <div key={"Token" + token.id} className={styles.border}>
            <div className={styles.Token} style={{ background: token.bgColor }}>
              <div className={styles.Badge}>
                <span>{token.badgeName}</span>
              </div>
              <img
                className={styles.TokenImage}
                src={token.tokenImage}
                alt={token.tokenName}
              />
              <div className={styles.TokenName}>{token.tokenName}</div>
              <div className={styles.sub}>
                <span className={styles.GameName}>{token.gameName}</span>
                {token.tag !== "" && (
                  <span className={styles.Tag}>{token.tag}</span>
                )}
              </div>
              <div className={styles.TokenBottom}>
                <span className={styles.TokenCost}>${token.tokenCost}</span>
                <span className={styles.Rate}>+{token.tokenRate}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tokens;
