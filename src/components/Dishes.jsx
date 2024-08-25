import React from "react";
import DishCard from "./DishCard";
import { DISHES } from "../constants";

const Dishes = () => {
  return (
    <div className="container mx-auto py-16" id="dishes">
      <h2
        className="mb-8 text-center text-3xl tracking-tighter 
            lg:text-4xl"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:px-0 px-3">
          {DISHES.map((project, index) => (
            <DishCard key={index} project={project}></DishCard>
          ))}
        </div>
      </h2>
    </div>
  );
};

export default Dishes;
