import React from "react";

const ResultItem = ({
  show: {
    image: { medium }
  }
}) => {
  return (
    <div className="result_item">
      <img src={medium} alt={"result_pic"} />
    </div>
  );
};

export default ResultItem;
