import React from "react";
import CustomProject from "./CustomProject";
import Cart from "../../public/assets/ShoppingCart.png";
import RecipeImg from "../../public/assets/recipeMealApp.png";
import RickImg from "../../public/assets/rick&Morty.png";
import Task from "../../public/assets/task-manager.png";
import BlogImg from "../../public/assets/blogapp.png";
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
      A CRUD application that allows users to view different blogs and share
      content online to build an audience for ideas.
      <br /> Tooling: React, Redux toolkit, Tailwind CSS ,NodeJs MongoDB
    </p>
  );
  const cart = (
    <p>
      A lightweight application that mocks an ecommerce application. <br />
      Tooling: React, Redux toolkit, NodeJS, Express
    </p>
  );
  const task = (
    <p>
      A task manager application that allows users to keep a record of tasks and
      perform all CRUD operations.Data is persisted in local storage to allow
      users to access tasks across all sessions. <br />
      Tooling: React, Tailwind CSS
    </p>
  );
  const characters = (
    <p>
      A Rick and Morty application that retrieves character and episode
      information, featuring functionalities such as pagination and filtering
      options based on gender and status <br />. Tooling: React, React Query,
      Tailwind CSS
    </p>
  );
  return (
    <section className="pt-20" id="projects">
      <Title>Projects</Title>
      <div id="projects">
        {/* <CustomProject
          title="Recipe app"
          content={element}
          demoLink="https://recipe-meal-app.netlify.app/"
          githubLink="https://github.com/MainaMary/recipe-meal-app"
          image={RecipeImg}
        /> */}
        <CustomProject
          title="Blog app"
          content={priceSetter}
          demoLink="https://blog-appsite.vercel.app/"
          githubLink="https://github.com/MainaMary/Blog-site"
          image={BlogImg}
        />
        <CustomProject
          title="Rick and Morty App"
          content={characters}
          demoLink="https://rick-and-morty-wtm.netlify.app/"
          githubLink="https://github.com/MainaMary/Rick-and-Morty"
          image={RickImg}
          checker={false}
        />
        <CustomProject
          title="Task manager"
          content={task}
          demoLink="https://task-manager-mainamary.vercel.app/"
          githubLink="https://github.com/MainaMary/Task-manager"
          image={Task}
        />
        <CustomProject
          title="Shopping cart"
          content={cart}
          demoLink="https://github.com/MainaMary/shopping-cart"
          githubLink="https://github.com/MainaMary/shopping-cart"
          image={Cart}
          checker={false}
        />
      </div>
    </section>
  );
};

export default Projects;
