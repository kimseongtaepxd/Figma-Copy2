import "../assets/css/Rate.scss";
const Rate = (props) => {
  const rate = Math.abs(props.tokenRate);
  return (
    <span className={props.type}>
      {props.tokenRate > 0 ? "+" : props.tokenRate < 0 ? "-" : ""}
      {rate} %
    </span>
  );
};

export default Rate;
