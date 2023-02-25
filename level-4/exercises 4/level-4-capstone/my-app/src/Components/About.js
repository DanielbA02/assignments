import React from "react";
import "../css/About.css";

const About = () => {
  return (
    <>
      <div className="about-background">
        <div className="about-container">
          <h1 className="about-title">The Random Meal Generator App</h1>
          <p className="about-des">
            {" "}
            The Random Meal Generator App was created By Daniel Alexander as a
            part of the level 4 Capstone Project. This app is used to try and
            find new meals you may find yourself to enjoy as well as the ability
            to save any of your favorite recipes and their respective
            instructions for future use.
          </p>
        </div>

        <div className="functions-container">
          <h2 className="functions-title">PRIMARY FUNCTION</h2>
          <h3>In order to generate a random meal.</h3>
          <p>
            Description: On the home page you will be greeted by a random meal.
            if you like the meal you've descovered you can save it or generate a
            new meal by pressing the "New Meal" button.
          </p>
          <h3>Search for a Meal by the Category or by the Area of Origin</h3>
          <p>
            Description: Click "Search By" in the navbar to search for a
            specific meal by name or search for all meals that contain a
            specific Ingredient or if you want to be broad you can choose
            Categories and Areas to try and find new meals you may enjoy.
          </p>
          <p>
            Click the Name or Image to view a detailed page regarding the Meal
            you have chosen.
          </p>
        </div>
      </div>
    </>
  );
};
export default About;
