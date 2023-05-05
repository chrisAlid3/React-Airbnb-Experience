import ballerina from "../src/images/ballerina.jpeg";
import cookingWoman from "../src/images/cooking-woman.jpeg";
import singer from "../src/images/singer.jpg";

let experiences = [
  {
    image: ballerina,
    firstname: "Emily",
    lastname: "Brown",
    experienceType: "Ballet classes",
    price: "$136",
    rating: "4.5",
    country: "USA",
    soldout: false,
    online: true,
  },
  {
    image: cookingWoman,
    firstname: "Jude",
    lastname: "White",
    experienceType: "Cooking classes",
    price: "125",
    currency: "£",
    rating: "4.9",
    country: "United Kingdom",
    soldout: true,
    online: false,
  },
  {
    image: singer,
    firstname: "Rose",
    lastname: "Black",
    experienceType: "Singing classes",
    price: "80",
    currency: "EUR",
    rating: "3.4",
    country: "Germany",
    soldout: false,
    online: false,
  },
];

export default experiences;
