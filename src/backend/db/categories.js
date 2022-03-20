import { v4 as uuid } from "uuid";
import Images from "../../asset/image";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Accessories",
    image:Images.categoryAccessory,
    description: "Grab favorite handbags, jewelries, and many other items.",
  },
  {
    _id: uuid(),
    categoryName: "Designs",
    image:Images.categoryDesign,
    description: "Gather design patterns from a variety of artists.",
  },
  {
    _id: uuid(),
    categoryName: "Tools",
    image:Images.categoryTools,
    description: "Acquire tools that will be suitable to you.",
  },
  {
    _id: uuid(),
    categoryName: "Clothing",
    image:Images.categoryCloth,
    description: "Look for your style among the crowd.",
  },
  {
    _id: uuid(),
    categoryName: "Machines",
    image:Images.categoryMachine,
    description: "Capture your machine",
  }
];