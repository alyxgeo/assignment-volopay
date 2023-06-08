import React, { useState } from "react";
import ActionCard from "../Crad";
import SingleCard from "./SingleCard";

const AllCrads = (props) => {

  const allOptions = props.SampleData[0].data;


  return (
    <div>
      <h2>all cards</h2>
      <SingleCard allOptions={allOptions} />
    </div>
  );
};

export default AllCrads;
