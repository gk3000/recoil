import React from "react";
import { useRecoilValue } from "recoil";
import { v4 as uuidv4 } from "uuid";

import { resultState } from "../utils/state";

import ResultItem from "../components/result_item";

const Result = props => {
  const result = useRecoilValue(resultState);

  return (
    <>
    <div className="result_container">
      {result.map(ele => (
        <ResultItem key={uuidv4()} {...ele} />
      ))}
    </div>
    <div className='footer'>
      <button onClick={()=>props.history.goBack()}>Go back</button>
    </div>
    </>
  );
};

export default Result;
