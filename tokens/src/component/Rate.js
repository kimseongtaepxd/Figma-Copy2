import styles from "../assets/css/Rate.module.scss";

const Rate = (props) => {
  const rate = Math.abs(props.tokenRate);
  return (
    <span className={styles[props.type]}>
      {props.tokenRate > 0 ? "+" : props.tokenRate < 0 ? "-" : ""}
      {rate} %
    </span>
  );
};

export default Rate;
