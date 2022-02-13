import React from "react";
import FoodItem from "./FoodItem";

const Fooditemlist = (props) => {
  const { dataArray } = props;
  return (
    <article>
      {dataArray.map((item, index) => {
        return <FoodItem title={item.title} />;
      })}
    </article>
  );
};

export default Fooditemlist;
