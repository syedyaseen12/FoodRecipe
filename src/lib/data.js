import pic from "../Assets/pic.png";
import pic2 from "../Assets/pic2.png";
import pic3 from "../Assets/pic3.png";
import pic4 from "../Assets/pic4.png";
import pic5 from "../Assets/pic5.png";
import pic6 from "../Assets/pic6.png";
import pic7 from "../Assets/pic7.png";
import pop from "../Assets/pop.png";
import cheeseicon from "../Assets/cheeseicon.png";
import drinkicon from "../Assets/Drink icon.png";
import coffeicon from "../Assets/coffeicon.png";
 import c1 from "../Assets/c1.jpg";
import c2 from "../Assets/c2.jpg";
import c4 from "../Assets/c4.jpg";
import birthdaygirl from "../Assets/BirthdayGirl.png";
import couple from "../Assets/married couple.png";
import kebabpop from "../Assets/kebabpop.png";
import friends from "../Assets/Friends.png";
import burger from "../Assets/burger.png";
import chickenpop from "../Assets/chickenpop.png";
import french from "../Assets/french.png";
import pizza from "../Assets/Pizza.png";
import choclate from "../Assets/choclatepan.png";
import svg1 from "../Assets/1.svg";
import svg2 from "../Assets/2.svg";
import svg3 from "../Assets/3.svg";
import svg4 from "../Assets/4.svg";

//  Events Card data
export const eventsdata = [
  {
    img: birthdaygirl,
    title: "Birthdays",
    desciption:
      "In the new era of technology we look in the future with certainty for life",
  },
  {
    img: couple,
    title: "Weddings ",
    desciption:
      "In the new era of technology we look in the future with certainty for life",
  },
  {
    img: kebabpop,
    title: "Partys",
    desciption:
      "In the new era of technology we look in the future with certainty for life",
  },
  {
    img: friends,
    title: "Get together",
    desciption:
      "In the new era of technology we look in the future with certainty for life",
  },
];

// Recipe Card data 
export const cardData = [
  {
    img: pic,
    price: "$14.9",
    name: "Fried Eggs",
    Description: "Delicious food Ever, With caramel cheese and Spinach ",
    type:"BreakFast"
  },
  {
    img: pic2,
    price: "$14.9",
    name: "Soda",
    Description: "Delicious food Ever, With caramel cheese and Spinach ",
        type:"Drinks"

  },
  {
    img: pic3,
    price: "$14.9",
    name: "Maritnez CockTail",
    Description: "Delicious food Ever, With caramel cheese and Spinach ",
            type:"Drinks"

  },
  {
    img: pic4,
    price: "$14.9",
    name: "PanCake ",
    Description: "Delicious food Ever, With caramel cheese and Spinach ",
            type:"Breakfast"

  },
  {
    img: pic5,
    price: "$14.9",
    name: "Burger",
    Description: "Delicious food Ever, With caramel cheese and Spinach ",
    type:"Breakfast"
  },
  {
    img: pic6,
    price: "$14.9",
    name: "Choclate Icecream",
    Description: "Delicious food Ever, With caramel cheese and Spinach ",
    type:"Desserts"
  },
  {
    img: pic7,
    price: "$14.9",
    name: "Butterscotch Cake",
    Description: "Delicious food Ever, With caramel cheese and Spinach ",
        type:"Desserts"

  },
  {
    img: pic,
    price: "$14.9",
    name: "Cheese Cake",
    Description: "Delicious food Ever, With caramel cheese and Spinach ",
        type:"Desserts"

  },
];

// buttons names
 export const buttondata = ["All", "Breakfast", "Main Dishes", "Drinks", "Desserts"];


// browsecard data
 export const browseData = [
   {
     img: pop,
     name: "Breakfast",
     description: "Delicous meal on Earth, You'll have to take a bite",
     btnname: "Explore Menu",
   },
   {
     img: cheeseicon,
     name: "Desserts",
     description: "Delicous meal on Earth, You'll have to take a bite",
     btnname: "Explore Menu",
   },
   {
     img: drinkicon,
     name: "Drinks",
     description: "Delicous meal on Earth, You'll have to take a bite",
     btnname: "Explore Menu",
   },
   {
     img: coffeicon,
     name: "Coffee",
     description: "Delicous meal on Earth, You'll have to take a bite",
     btnname: "Explore Menu",
   },
 ];



 // feedback data of users
export const renderData = {
  feedback: [
    {
      id: 1,
      title: "The best restaurant",
      body: `Last night, we dined at place and were simply blown away. From the
              moment we stepped in, we were enveloped in an inviting atmosphere
              and greeted with warm smiles.`,
      profile: {
        profilepic: c1,
        profilename: "Yaseen",
        place: "new York",
      },
    },
    {
      id: 2,
      title: "Simply delicious",
      body: `Last night, we dined at place and were simply blown away. From the
              moment we stepped in, we were enveloped in an inviting atmosphere
              and greeted with warm smiles.`,
      profile: {
        profilepic: c2,
        profilename: "lala",
        place: "germany",
      },
    },
    {
      id: 2,
      title: "One of a kind restaurent",
      body: `Last night, we dined at place and were simply blown away. From the
              moment we stepped in, we were enveloped in an inviting atmosphere
              and greeted with warm smiles.`,
      profile: {
        profilepic: c4,
        profilename: "benji",
        place: "USA",
      },
    },
  ],
};

// blog data
export const blogdata = {
  recipes: [
    {
      id: 1,
      img: chickenpop,
      date: "january 01.01.2001",
      body: "How to Prepare Delicious Food",
    },
    {
      id: 2,
      img: french,
      date: "january 01.01.2001",
      body: "How to Prepare Delicious Food",
    },
    {
      id: 3,
      img: choclate,
      date: "january 01.01.2001",
      body: "How to Prepare Delicious Food",
    },
    {
      id: 4,
      img: pizza,
      date: "january 01.01.2001",
      body: "How to Prepare Delicious Food",
    },
  ],
  herosection: [
    {
      img: burger,
      date: "january 01.01.2001",
      body: `Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.`,
    },
  ],
};


// socialmedia icons 
export const socialImages = [
  {
    imgUrl: svg1,
    link: "",
  },
  {
    imgUrl: svg2,
    link: "",
  },
  {
    imgUrl: svg3,
    link: "",
  },
  {
    imgUrl: svg4,
    link: "",
  },
];