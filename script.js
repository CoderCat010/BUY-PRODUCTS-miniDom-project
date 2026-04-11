// all products data
let products = {
  data: [
    // product: 1
    {
      productName: "Regular White T-Shirt",
      category: "Topwear",
      price: "30",
      image: "./images/white-tshirt.jpg",
    },

    // product: 2
    {
      productName: "Beige Short Skirt",
      category: "Bottomwear",
      price: "49",
      image: "./images/short-skirt.jpg",
    },

    // product: 3
    {
      productName: "Sporty SmartWatch",
      category: "Watch",
      price: "99",
      image: "./images/sporty-smartwatch.jpg",
    },

    // product: 4
    {
      productName: "Basic Knitted Top",
      category: "Topwear",
      price: "29",
      image: "./images/knitted-top.jpg",
    },

    // product: 5
    {
      productName: "Black Leather Jacket",
      category: "Jacket",
      price: "129",
      image: "./images/black-leather-jacket.jpg",
    },

    // product: 6
    {
      productName: "Stylish Pink Trousers",
      category: "Bottomwear",
      price: "89",
      image: "./images/pink-trousers.jpg",
    },

    // product: 7
    {
      productName: "Brown Men's Jacket",
      category: "Jacket",
      price: "189",
      image: "./images/brown-jacket.jpg",
    },

    // product: 8
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "./images/comfy-gray-pants.jpg",
    },
  ],
};


// get search-box
const searchBox = document.getElementById('search-box');

// get search-btn
const searchBtn = document.getElementById('search-btn');

// get all items-button
const itemsBtn = document.getElementById('items-button');

// get all products container
const allProducts = document.getElementById('all-products');


// get each product data through loop
for(let allData of products.data){
    // create product card container 
    const cardsContainer = document.createElement('div');
    // add class to style each one card
    cardsContainer.classList.add('cards-container');

    // create img container
    const imgContainer = document.createElement('div');
    // add class to style each one img
    imgContainer.classList.add('img-container');
    // set attribute
    const images = document.createElement('img');
    images.setAttribute('src', allData.image);

    // Append the image to the image container, then add the image container to the card, and finally add the card to the products section so it appears on the page.
    imgContainer.appendChild(images);
    cardsContainer.appendChild(imgContainer);
    allProducts.appendChild(cardsContainer);
}
