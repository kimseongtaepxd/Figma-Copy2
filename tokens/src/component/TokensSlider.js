import styles from "../assets/css/Tokens.module.scss";
import debco from "../assets/img/img_debco.png";
import draco from "../assets/img/img_draco.png";
import reflect from "../assets/img/img_reflect.png";
import tig from "../assets/img/img_tig.png";
import tornado from "../assets/img/img_tornado.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tokens from "../component/Tokens";

const TokensSlider = () => {
  const token = [
    {
      id: 1,
      bgColorType: "dracoBgColor",
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
      bgColorType: "tornadoBgColor",
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
      bgColorType: "debcoBgColor",
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
      bgColorType: "reflectBgColor",
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
      bgColorType: "tigBgColor",
      badgeName: "Most Played",
      tokenImage: tig,
      tokenName: "TIG",
      gameName: "YULGANG GLOBAL",
      tag: "",
      tokenCost: 1.9312,
      tokenRate: 9.66,
      type: "increase",
    },
  ];

  const settings = {
    className: "center",
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

  return (
    <>
      <div className={styles.tokenContainer}>
        <div className={styles.title}>
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
        <div className={styles.tokens}>
          <Slider {...settings}>
            {token.map((token) => (
              <Tokens props={token} key={"Token" + token.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default TokensSlider;
