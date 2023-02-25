import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

const Home = (props) => {
  return (
    <>
      <div className="background">
        <header className="header-title">The Random Meal Generator</header>

        <div className="random-container">
          <Link
            className="detail-link"
            to={`/mealDetail/${props.randomMeal.idMeal}`}
          >
            <h3 className="random-name">"{props.randomMeal.strMeal}"</h3>
          </Link>
          <Link to={`/mealDetail/${props.randomMeal.idMeal}`}>
            <img
              alt="Meal"
              className="random-img"
              src={props.randomMeal.strMealThumb}
            />
          </Link>
          <div className="btn-div-home">
            <button onClick={props.getRandomMeal} className="home-btn">
              Get New Meal
            </button>
            <button
              onClick={() => props.addMeal(props.randomMeal)}
              className="home-btn"
            >
              Save Meal
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
