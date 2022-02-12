import React from "react";

const FoodItem = (props) => {
  const {
    title,
    youtubeSource,
    ingredientsArray,
    recipeArray,
    fooditemNumber,
  } = props;
  return (
    <div>
      <h1>{`${fooditemNumber}. ${title}`}</h1>
      <iframe
        width="560"
        height="315"
        src={youtubeSource}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h3>Ingredients:</h3>
      <ul>
        {ingredientsArray.map((item, index) => {
          return <li>{item}</li>;
        })}

        {/* <li>1 tbsp. unsalted butter or olive oil</li>
                    <li>8 large eggs</li>
                    <li>Kosher salt and pepper</li>    */}
      </ul>
      {recipeArray.length != 0 && <h4>Recipe:</h4>}
      <ul>
        {recipeArray.map((item, index) => {
          return <li>{item}</li>;
        })}
        {/* <li>Heat butter (or oil) in a 10 to 12-in non-stick skillet on medium-low.</li>
                    <li>In a bowl, whisk together, eggs and ½ tsp each salt and pepper.</li>
                    <li>Add eggs to skillet and cook, stirring often until eggs are beginning to set.</li>
                    <li>Once the eggs are nearly set, add desired toppings (think cheese, cooked veggies, herbs, tender greens like spinach or baby kale).</li> */}
      </ul>
    </div>
  );
};

export default FoodItem;
