import React, { useState, useEffect } from "react";

import FoodItem from "./components/FoodItem";
import "./App.css";

const App = () => {
  const [activeTab, setActiveTab] = useState("Breakfast");

  const handleTabchange = (val) => {
    setActiveTab(val);
  };

  return (
    <div className="App">
      <nav id="navbar">
        <header>fOOd recipes</header>
        <ul>
          <li>
            <a class="nav-link" href="#Breakfast">
              Breakfast
            </a>
          </li>
          <li>
            <a class="nav-link" href="#Lunch">
              Lunch
            </a>
          </li>
          <li>
            <a class="nav-link" href="#Sweets">
              Sweets
            </a>
          </li>
          <li>
            <a class="nav-link" href="#Snacks">
              Snacks
            </a>
          </li>
          <li>
            <a class="nav-link" href="#Soups">
              Soups
            </a>
          </li>
        </ul>
      </nav>
      {/* <!--------------------------------Main-section-------------------------------------> */}
      <main id="main-doc">
        <section class="main-section" id="Breakfast">
          <header>Breakfast</header>

          <article>
            <FoodItem
              title="Peanut Butter and banana smoothie"
              youtubeSource="https://www.youtube.com/embed/PoJ1MbRMKL4"
              ingredientsArray={[
                "1 cup milk",
                "Pilled banana",
                "1 tablespoon peanut butter",
                "tablespoon cocoa powder",
              ]}
              recipeArray={[
                "Place all ingredients into a blender",
                "Blend until smooth and serve",
              ]}
              fooditemNumber="1"
            />

            <FoodItem
              title="Whole wheat banana bread"
              youtubeSource="https://www.youtube.com/embed/ejHRWuFsWlU"
              ingredientsArray={[
                "Whole wheat bread",
                "2 sliced bananas",
                "1 tablespoon peanut butter",
                "1 tablespoon cocoa powder",
              ]}
              recipeArray={[
                "Place all ingredients between two bread slices",
                "Add cocoa powder and serve",
              ]}
              fooditemNumber="2"
            />

            <FoodItem
              title="Oatmeal with cranberries"
              youtubeSource="https://www.youtube.com/embed/dfRE4V27qMM"
              ingredientsArray={[
                "1/4 c. quick oats",
                "Ground cinnamon",
                "Grated orange zest",
                "Kosher salt",
                "1 tbsp. dried cranberries",
              ]}
              recipeArray={[
                "In bowl, place quick oats, dried cranberries and chopped toasted pecans",
                "brown sugar and pinch each of ground cinnamon",
                "grated orange zest and salt",
                "Add 1/2 to 3/4 cup just-boiling water. Let sit 1 min. Stir and eat.",
              ]}
              fooditemNumber="3"
            />

            <FoodItem
              title="Scrambled Eggs"
              youtubeSource="https://www.youtube.com/embed/-OHfxqVp-Wg"
              ingredientsArray={[
                "1 tbsp. unsalted butter or olive oil",
                "8 large eggs",
                "Kosher salt and pepper",
              ]}
              recipeArray={[
                "Heat butter (or oil) in a 10 to 12-in non-stick skillet on medium-low.",
                "In a bowl, whisk together, eggs and ½ tsp each salt and pepper.",
                "Add eggs to skillet and cook, stirring often until eggs are beginning to set.",
                "Once the eggs are nearly set, add desired toppings think cheese, cooked veggies, herbs, tender greens like spinach or baby kale.",
              ]}
              fooditemNumber="4"
            />
          </article>
        </section>

        <section class="main-section" id="Lunch">
          <header>Lunch</header>
          <article>
            <FoodItem
              title="Veg Fried Rice"
              youtubeSource="https://www.youtube.com/embed/hoZccEa0Pqo"
              ingredientsArray={[
                "2 tbsp oil",
                "4 tbsp spring onion(finely chopped)",
                "2 tbsp cabbage(finely chopped)",
                "2 tbsp peas / matar",
                "¼ capsicum (finely chopped)",
                "2 tbsp soy sauce",
                ">1 tsp pepper (crushed)",
              ]}
              recipeArray={[]}
              fooditemNumber="1"
            />

            <FoodItem
              title="Rajma pulao rice"
              youtubeSource="https://www.youtube.com/embed/unN7g-Ua2z4"
              ingredientsArray={[
                "1 tsp kashmiri red chilli powder / lal mirch powder",
                "1 cup basmati rice (soaked 20 minutes)",
                "2 tbsp cabbage(finely chopped)",
                "2 tbsp peas / matar",
                "¼ capsicum (finely chopped)",
                "2 tbsp soy sauce",
                "1 tsp pepper (crushed)",
              ]}
              recipeArray={[]}
              fooditemNumber="2"
            />

            <FoodItem
              title="Bajra Roti"
              youtubeSource="https://www.youtube.com/embed/tXVUqtKOjL4"
              ingredientsArray={[
                "2 cup bajra atta / pearl millet flour / sajje hittu",
                "hot water (to knead)",
                "wheat flour (for dusting)",
                "2 tbsp peas / matar",
                "¼ capsicum (finely chopped)",
                "2 tbsp soy sauce",
                "1 tsp pepper (crushed)",
              ]}
              recipeArray={[]}
              fooditemNumber="3"
            />

            <FoodItem
              title="Daal Dhokli"
              youtubeSource="https://www.youtube.com/embed/A-wJQ83ISFg"
              ingredientsArray={[
                "½ cup toor dal (rinsed)",
                "2 tbsp peanuts",
                "2 tbsp peas / matar",
                "¼ capsicum (finely chopped)",
                "2 tbsp soy sauce",
                "1 tsp pepper (crushed)",
              ]}
              recipeArray={[]}
              fooditemNumber="4"
            />
          </article>
        </section>

        <section class="main-section" id="Sweets">
          <header>Sweets</header>
          <article>
            <FoodItem
              title="Besan Barfi"
              youtubeSource="https://www.youtube.com/embed/TZlBCdO4yJU"
              ingredientsArray={[
                "1 cup ghee",
                "3 cup besan",
                "2 tbsp suji / semolina",
                "1½ cup sugar",
                "pinch saffron food colour",
                "¼ tsp cardamom powder",
              ]}
              recipeArray={[]}
              fooditemNumber="1"
            />

            <FoodItem
              title="Kaju Katli"
              youtubeSource="https://www.youtube.com/embed/M6CwnxnxHKI"
              ingredientsArray={[
                "1 cup ghee",
                "3 cup besan",
                "2 tbsp suji / semolina",
                "1½ cup sugar",
                "pinch saffron food colour",
                "¼ tsp cardamom powder",
              ]}
              recipeArray={[]}
              fooditemNumber="2"
            />

            <FoodItem
              title="Puran Poli"
              youtubeSource="https://www.youtube.com/embed/LFXPUT7kYPg"
              ingredientsArray={[
                "1½ cup chana dal",
                "½ tsp ghee",
                "1½ cup jaggery",
                "1½ cup sugar",
                "pinch saffron food colour",
                "¼ tsp cardamom powder",
              ]}
              recipeArray={[]}
              fooditemNumber="3"
            />

            <FoodItem
              title="Chocolate Barfi"
              youtubeSource="https://www.youtube.com/embed/Si1cmfKSZoE"
              ingredientsArray={[
                "700 grams khoya / mawa (grated)",
                "1 cup (225 grams) sugar",
                "1½ cup jaggery",
                "1½ cup sugar",
                "pinch saffron food colour",
                "¼ tsp cardamom powder",
              ]}
              recipeArray={[]}
              fooditemNumber="4"
            />

            <FoodItem
              title="Banana Malpua"
              youtubeSource="https://www.youtube.com/embed/drNMrC9g4yw"
              ingredientsArray={[
                "1 banana",
                "1 banana",
                "1½ cup jaggery",
                "1½ cup sugar",
                "pinch saffron food colour",
                "¼ tsp cardamom powder",
              ]}
              recipeArray={[]}
              fooditemNumber="5"
            />
          </article>
        </section>
        <section class="main-section" id="Snacks">
          <header>Snacks</header>
          <article>
            <FoodItem
              title="Rava Vada"
              youtubeSource="https://www.youtube.com/embed/wnom3hHIkFY"
              ingredientsArray={[
                "1½ cup rava / semolina / suji (fine)",
                "2 chilli (finely chopped",
                "2 tbsp lemon juice",
                "2 tbsp hot oil",
                "oil (for frying)",
              ]}
              recipeArray={[]}
              fooditemNumber="1"
            />

            <FoodItem
              title="Lachha Namak Para"
              youtubeSource="https://www.youtube.com/embed/LONSKTNiU_w"
              ingredientsArray={[
                "3 cup maida",
                "2 tbsp kasuri methi",
                "2 tbsp hot oil",
                "1½ cup sugar",
                "oil (for frying)",
              ]}
              recipeArray={[]}
              fooditemNumber="2"
            />

            <FoodItem
              title="Cashew Nut Chaklee"
              youtubeSource="https://www.youtube.com/embed/cq86Ls9qrFI"
              ingredientsArray={[
                "½ cup cashew / kaju",
                "¼ cup besan / gram flour",
                "2 tbsp sesame",
                "1 tbsp butter",
                "oil (for frying)",
              ]}
              recipeArray={[]}
              fooditemNumber="3"
            />

            <FoodItem
              title="Aloo puff"
              youtubeSource="https://www.youtube.com/embed/eOcE8z0f6Iw"
              ingredientsArray={[
                "3 cup wheat flour",
                "½ onion (finely chopped)",
                "4 potato (boiled & mashed)",
                "1 tbsp butter",
                "2 tbsp coriander (finely chopped)",
              ]}
              recipeArray={[]}
              fooditemNumber="4"
            />
          </article>
        </section>
        <section class="main-section" id="Soups">
          <header>Soups</header>
          <article>
            <FoodItem
              title="Ginger garlic soup"
              youtubeSource="https://www.youtube.com/embed/mwh3gQkil3k"
              ingredientsArray={[
                "3 cup vegetable scraps",
                "4 clove garlic (finely chopped)",
                "3 tbsp sweet corn",
                "2 tbsp spring onion (chopped)",
                "2 tbsp coriander (finely chopped)",
              ]}
              recipeArray={[]}
              fooditemNumber="1"
            />

            <FoodItem
              title="Pasta soup"
              youtubeSource="https://www.youtube.com/embed/4JBEp_FDLH8"
              ingredientsArray={[
                "3 tsp olive oil",
                "2 tbsp spring onion (chopped)",
                "3 tbsp sweet corn",
                "2 tbsp spring onion (chopped)",
                "2 tbsp coriander (finely chopped)",
              ]}
              recipeArray={[]}
              fooditemNumber="2"
            />

            <FoodItem
              title="Veg Manchow soup"
              youtubeSource="https://www.youtube.com/embed/2xpU5_Z5Fik"
              ingredientsArray={[
                "3 tbsp cabbage (finely chopped)",
                "2 tbsp coriander stem (chopped)",
                "1 pack hakka noodles",
                "2 tbsp coriander (finely chopped)",
              ]}
              recipeArray={[]}
              fooditemNumber="3"
            />

            <FoodItem
              title="Beetroot soup"
              youtubeSource="https://www.youtube.com/embed/B8uJnJZBPAs"
              ingredientsArray={[
                "1½ cup beetroot (cubed)",
                "1 tomato (chopped)",
                "2 shallots (halves)",
                "1 tsp butter",
              ]}
              recipeArray={[]}
              fooditemNumber="4"
            />
          </article>
        </section>
      </main>
    </div>
  );
};

export default App;
