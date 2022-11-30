import styles from "../assets/css/Tokens.module.scss";
import debco from "../assets/img/img_debco.png";
import draco from "../assets/img/img_draco.png";
import reflect from "../assets/img/img_reflect.png";
import tig from "../assets/img/img_tig.png";
import tornado from "../assets/img/img_tornado.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Tokens from "../component/Tokens";
import UselessButton from "../component/UselessButton";

const TokensSlider = () => {
  const [token, setToken] = useState([
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
      tokenRate: -4,
      type: "decrease",
    },
    {
      id: 2,
      bgColor:
        "radial-gradient(85.21% 85.21% at 50% -17.61%, rgba(188, 63, 51, 0.2) 0%, rgba(188, 63, 51, 0) 100%), rgba(255, 255, 255, 0.05)",
      badgeName: "Top Loser",
      tokenImage: tornado,
      tokenName: "TORNADO",
      gameName: "CrypTornado",
      tag: "+2",
      tokenCost: 1.9312,
      tokenRate: 0,
      type: "none",
    },
    {
      id: 3,
      bgColor:
        "radial-gradient(85.21% 85.21% at 50% -17.61%, rgba(204, 0, 72, 0.2) 0%, rgba(204, 0, 72, 0) 100%), rgba(255, 255, 255, 0.05)",
      badgeName: "Recentlry Added",
      tokenImage: debco,
      tokenName: "DEBCO",
      gameName: "Dark Eden M",
      tag: "",
      tokenCost: 1.9312,
      tokenRate: 5.59,
      type: "increase",
    },
    {
      id: 4,
      bgColor:
        "radial-gradient(85.21% 85.21% at 50% -17.61%, rgba(46, 220, 178, 0.2) 0%, rgba(46, 220, 178, 0) 100%), rgba(255, 255, 255, 0.05)",
      badgeName: "Top ROI",
      tokenImage: reflect,
      tokenName: "REFLECT",
      gameName: "MIR4",
      tag: "+2",
      tokenCost: 1.9312,
      tokenRate: -1.41,
      type: "decrease",
    },
    {
      id: 5,
      bgColor:
        " radial-gradient(85.21% 85.21% at 50% -17.61%, rgba(199, 115, 38, 0.2) 0%, rgba(199, 115, 38, 0) 100%), rgba(255, 255, 255, 0.05)",
      badgeName: "Most Played",
      tokenImage: tig,
      tokenName: "TIG",
      gameName: "YULGANG GLOBAL",
      tag: "",
      tokenCost: 1.9312,
      tokenRate: 9.66,
      type: "increase",
    },
  ]);

  const settings = {
    className: "center",
    slide: "ul",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    variableWidth: true,
    swipeToSlide: true,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 952,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 708,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 464,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  /* 삭제해도 되는 부분 시작 */
  const ChangeRate = () => {
    const updateRate = token.map((item) => ({
      ...item,
      tokenRate: Math.floor(Math.random() * 20001 - 10000) / 100, // 새로운 아이템 내용을 넣어줌
    }));

    const updatetype = updateRate.map((item) => ({
      ...item,
      type:
        item.tokenRate > 0
          ? "increase"
          : item.tokenRate < 0
          ? "decrease"
          : "none", // 새로운 아이템 내용을 넣어줌
    }));

    setToken(updatetype); // 새로운 리스트를 넣어줌
  };

  /* 삭제해도 되는 부분 (끝) */

  return (
    <>
      <div className={styles.Title}>
        <span>TOKENS</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="16" cy="16" r="14"></circle>
          <polyline points="15 21 21 16 15 10" strokeWidth="2"></polyline>
        </svg>
      </div>
      <div className={styles.Tokens}>
        <Slider {...settings}>
          {token.map((token) => (
            <Tokens props={token} key={"Token" + token.id} />
          ))}
        </Slider>
      </div>
      <UselessButton ChangeRate={ChangeRate} />
    </>
  );
};

export default TokensSlider;
