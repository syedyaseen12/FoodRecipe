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
    title: "Caterings",
    desciption:
      "In the new era of technology we look in the future with certainty for life",
  },
  {
    img: friends,
    title: "Events",
    desciption:
      "In the new era of technology we look in the future with certainty for life",
  },
];

// Recipe Card data 
export const cardData = [
  {
    id:1,
    img: pic,
    price: "$14.9",
    name: "Fried Eggs",
    Description: "Delicious food Ever, With caramel cheese and Spinach ",
    type:"BreakFast"
  },
  {
   id:2,
    img: pic2,
    price: "$14.9",
    name: "Mint Lemonade",
    Description: "Delicious food Ever, With caramel cheese and Spinach ",
        type:"Drinks"

  },
  {
    id:3,
    img: pic3,
    price: "$14.9",
    name: "Maritnez Cocktail",
    Description: "Delicious food Ever, With caramel cheese and Spinach ",
            type:"Drinks"

  },
  {
    id:4,
    img: pic4,
    price: "$14.9",
    name: "Classic Waffles",
    Description: "Delicious food Ever, With caramel cheese and Spinach ",
            type:"Breakfast"

  },
  {
     id:5,
    img: pic5,
    price: "$14.9",
    name: "Burger",
    Description: "Delicious food Ever, With caramel cheese and Spinach ",
    type:"Breakfast"
  },
  {
    id:6,
    img: pic6,
    price: "$14.9",
    name: "Choclate Icecream",
    Description: "Delicious food Ever, With caramel cheese and Spinach ",
    type:"Desserts"
  },
  {
    id:7,
    img: pic7,
    price: "$14.9",
    name: "Butterscotch Cake",
    Description: "Delicious food Ever, With caramel cheese and Spinach ",
        type:"Desserts"

  },
  {
     id:8,
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
      body: `Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.`,
      profile: {
        profilepic: c1,
        profilename: "Yaseen",
        place: "New York",
      },
    },
    {
      id: 2,
      title: "Simply delicious",
      body: `Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.`,
      profile: {
        profilepic: c2,
        profilename: "lala",
        place: "Germany",
      },
    },
    {
      id: 3,
      title: "One of a kind restaurent",
      body:` The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.`,
      profile: {
        profilepic: c4,
        profilename: "benji",
        place: "Japan",
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
      body: "How to prepare delicious chicken tenders",
    },
    {
      id: 3,
      img: choclate,
      date: "january 01.01.2001",
      body: "7 delicious cheesecake recipes you can prepare",
    },
    {
      id: 4,
      img: pizza,
      date: "january 01.01.2001",
      body: "5 great pizza restaurants you should visit this city",
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