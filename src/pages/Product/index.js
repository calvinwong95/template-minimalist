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
      name: "Sausage Platter",
      price: 20,
      description: "Cajun Sausages with avocado dip",
    },
    {
      name: "Sausage Platter",
      price: 20,
      description: "Cajun Sausages with avocado dip",
    },
    {
      name: "Sausage Platter",
      price: 20,
      description: "Cajun Sausages with avocado dip",
    },
    {
      name: "Sausage Platter",
      price: 20,
      description: "Cajun Sausages with avocado dip",
    },
    {
      name: "Sausage Platter",
      price: 20,
      description: "Cajun Sausages with avocado dip",
    },
    {
      name: "Sausage Platter",
      price: 20,
      description: "Cajun Sausages with avocado dip",
    },
    {
      name: "Sausage Platter",
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
      name: "Steak Tartare",
      price: 40,
      description: "Raw beef, capers, mustard, honey, salt and pepper",
    },
    {
      name: "Steak Tartare",
      price: 40,
      description: "Raw beef, capers, mustard, honey, salt and pepper",
    },
    {
      name: "Steak Tartare",
      price: 40,
      description: "Raw beef, capers, mustard, honey, salt and pepper",
    },
    {
      name: "Steak Tartare",
      price: 40,
      description: "Raw beef, capers, mustard, honey, salt and pepper",
    },
    {
      name: "Steak Tartare",
      price: 40,
      description: "Raw beef, capers, mustard, honey, salt and pepper",
    },
    {
      name: "Steak Tartare",
      price: 40,
      description: "Raw beef, capers, mustard, honey, salt and pepper",
    },
    {
      name: "Steak Tartare",
      price: 40,
      description: "Raw beef, capers, mustard, honey, salt and pepper",
    },
    {
      name: "Steak Tartare",
      price: 40,
      description: "Raw beef, capers, mustard, honey, salt and pepper",
    },
  ];
  const listArrayThree = [
    {
      name: "Sweet and Sour Mojito",
      price: 20,
      description: "Mint, Lime, Honey, Rum, Sprite",
    },
    {
      name: "Sweet and Sour Mojito",
      price: 20,
      description: "Mint, Lime, Honey, Rum, Sprite",
    },
    {
      name: "Sweet and Sour Mojito",
      price: 20,
      description: "Mint, Lime, Honey, Rum, Sprite",
    },
    {
      name: "Sweet and Sour Mojito",
      price: 20,
      description: "Mint, Lime, Honey, Rum, Sprite",
    },
    {
      name: "Sweet and Sour Mojito",
      price: 20,
      description: "Mint, Lime, Honey, Rum, Sprite",
    },
    {
      name: "Sweet and Sour Mojito",
      price: 20,
      description: "Mint, Lime, Honey, Rum, Sprite",
    },
    {
      name: "Sweet and Sour Mojito",
      price: 20,
      description: "Mint, Lime, Honey, Rum, Sprite",
    },
    {
      name: "Sweet and Sour Mojito",
      price: 20,
      description: "Mint, Lime, Honey, Rum, Sprite",
    },
  ];
  const listArrayFour = [
    {
      name: "Panna Cotta",
      price: 20,
      description: "Coconut, Milk, Cream, Passion Fruit",
    },
    {
      name: "Panna Cotta",
      price: 20,
      description: "Coconut, Milk, Cream, Passion Fruit",
    },
    {
      name: "Panna Cotta",
      price: 20,
      description: "Coconut, Milk, Cream, Passion Fruit",
    },
    {
      name: "Panna Cotta",
      price: 20,
      description: "Coconut, Milk, Cream, Passion Fruit",
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
