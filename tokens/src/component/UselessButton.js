import "../assets/css/UselessButton.scss";
const Rate = (ChangeRate) => {
  return (
    <>
      <button type="button" onClick={ChangeRate.ChangeRate}>
        등락률 랜덤 배치
      </button>
    </>
  );
};

export default Rate;
