import React, { useContext } from "react";
import { PageStateContext } from "../../context/PageStateProvider";
import ScrollWrapper from "../../service/ScrollWrapper";
import DefaultProductOne from "./DefaultProduct/DefaultProductOne";
import DefaultProductThree from "./DefaultProduct/DefaultProductThree";
import DefaultProductTwo from "./DefaultProduct/DefaultProductTwo";
import DefaultProductFour from "./DefaultProduct/DefaultProductFour";
import MobileProductOne from "./MobileProduct/MobileProductOne";
import MobileProductTwo from "./MobileProduct/MobileProductTwo";
import MobileProductThree from "./MobileProduct/MobileProductThree";
import MobileProductFour from "./MobileProduct/MobileProductFour";

const Product = () => {
  const { isMobile } = useContext(PageStateContext);
  const listArrayOne = [
    {
      name: "Fried Pork Wonton",
      price: 10,
      description: "Crispy wonton with minced pork",
    },
    {
      name: "Fried Green Tomatillos",
      price: 20,
      description: "Tomato, capers, olives, feta cheese",
    },
    {
      name: "Bacon wrapped jalapenos",
      price: 15,
      description: "Crispy bacon with jalapenos, cream cheese sauce",
    },
    {
      name: "Shrimp Ceviche",
      price: 20,
      description:
        "bell pepper, onion, tomato, garlic, chives, coriander, shrimp",
    },
    {
      name: "Fried Coconut Shrimp",
      price: 20,
      description: "Cajun Sausages with avocado dip",
    },
    {
      name: "Sausage Platter",
      price: 20,
      description: "Cajun Sausages with avocado dip",
    },
  ];
  const listArrayTwo = [
    {
      name: "Mushroom Brocolli Alfredo",
      price: 30,
      description:
        "Shittake mushroom, brocolli, carrots, onions, pasta, cream, nuts",
    },
    {
      name: "Chicken Pot Pie",
      price: 25,
      description: "Chicken, carrots, onions, celery, puff pastry",
    },
    {
      name: "Baked ravioli",
      price: 35,
      description: "Tomato, parmesan, truffle oil, pasta, egg yolk",
    },
    {
      name: "Pork Ribs",
      price: 40,
      description: "All spice, mash potato, carrots, onions, sauce",
    },
    {
      name: "Shrimp pesto pasta",
      price: 42,
      description: "Tiger prawns, pinenuts, pesto, basil, garlic, onion",
    },
    {
      name: "Salmon with Dijon sauce",
      price: 38,
      description: "Salmon, mustard, tarragon, olive oil",
    },
    {
      name: "Peppercorn Steak",
      price: 60,
      description: "Angus steak, peppercorn sauce, seasoned mash potatoes",
    },
    {
      name: "Steak Tartare",
      price: 40,
      description: "Raw beef, capers, mustard, honey, salt and pepper",
    },
  ];
  const listArrayThree = [
    {
      name: "Sparkling Strawberry Lemonade",
      price: 20,
      description: "Lemon, strawberry, soda",
    },
    {
      name: "Strawberry Jalapeno margarita",
      price: 20,
      description: "strawberry, jalapeno, rum",
    },
    {
      name: "Spicy bloody mary cocktail",
      price: 29,
      description: "Olive, tomato, chilly, vodka",
    },
    {
      name: "Champagne margarita",
      price: 20,
      description: "Champagne with salt",
    },
    {
      name: "Pumpkin pie martini",
      price: 20,
      description: "pumpkin, all spice, martini",
    },
    {
      name: "Watermelon margarita",
      price: 20,
      description: "Watermelon, Rum, Sprite",
    },
    {
      name: "Apple Pie Cocktail",
      price: 20,
      description: "Apple, pie, cinnamon",
    },
    {
      name: "Sweet and Sour Mojito",
      price: 20,
      description: "Mint, Lime, Honey, Rum, Sprite",
    },
  ];
  const listArrayFour = [
    {
      name: "Salted chocolate brownie",
      price: 20,
      description: "Sea salt, chocolate, peanuts",
    },
    {
      name: "Panna Cotta",
      price: 20,
      description: "Coconut, Milk, Cream, Passion Fruit",
    },
    {
      name: "Cheesecake",
      price: 20,
      description: "Lemon zest, cream cheese, biscuits",
    },
    {
      name: "Banana split",
      price: 20,
      description: "Banana, ice cream, chocolate sauce",
    },
  ];
  return (
    <ScrollWrapper showDots={isMobile ? false : true}>
      {isMobile ? (
        <MobileProductOne listArray={listArrayOne} />
      ) : (
        <DefaultProductOne listArray={listArrayOne} />
      )}
      {isMobile ? (
        <MobileProductTwo listArray={listArrayTwo} />
      ) : (
        <DefaultProductTwo listArray={listArrayTwo} />
      )}
      {isMobile ? (
        <MobileProductThree listArray={listArrayThree} />
      ) : (
        <DefaultProductThree listArray={listArrayThree} />
      )}
      {isMobile ? (
        <MobileProductFour listArray={listArrayFour} />
      ) : (
        <DefaultProductFour listArray={listArrayFour} />
      )}
    </ScrollWrapper>
  );
};

export default Product;
