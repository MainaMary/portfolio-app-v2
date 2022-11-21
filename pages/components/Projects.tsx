import React from "react";
import CustomProject from "./CustomProject";
import Cart from "../../public/assets/ShoppingCart.png";
import RecipeImg from "../../public/assets/recipeMealApp.png";
import PriceImg from "../../public/assets/priceSetterI.png";
import Title from "./Title";
const Projects = () => {
  const element = (
    <p>
      A recipe app that allows users to search for thousands of recipes by
      serach query and ingredients.A user can also get a meal planner.
      <br /> Tooling: React, React query, Firebase
    </p>
  );
  const priceSetter = (
    <p>
      An application that allows vendors to set the price of different products
      based on the location of the business premises.
      <br /> Tooling: React, Redux toolkit, Tailwind CSS ,NodeJs MongoDB
    </p>
  );
  const cart = (
    <p>
      A lightweight application that mocks an ecommerce application. <br />
      Tooling: React, Redux toolkit, NodeJS, Express
    </p>
  );
  return (
    <section id="projects">
      <Title>Projects</Title>
      <div id="projects">
        <CustomProject
          title="Recipe app"
          content={element}
          demoLink="https://recipe-meal-app.netlify.app/"
          githubLink="https://github.com/MainaMary/recipe-meal-app"
          image={RecipeImg}
        />
        <CustomProject
          title="Price setter"
          content={priceSetter}
          demoLink="https://price-setter.netlify.app/"
          githubLink="https://github.com/MainaMary/pricing-form"
          image={PriceImg}
          checker={false}
        />
        <CustomProject
          title="Shopping cart"
          content={cart}
          demoLink="https"
          githubLink="https://github.com/MainaMary/shopping-cart"
          image={Cart}
        />
      </div>
    </section>
  );
};

export default Projects;
