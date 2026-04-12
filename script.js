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
      price: "19",
      image: "./images/brown-jacket.jpg",
    },

    // product: 8
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "./images/comfy-gray-pants.jpg",
    },

    // product: 9
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "78",
      image: "./images/bottomwear2.jpg",
    },

    // product: 10
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "78",
      image: "./images/bottomwear3.jpg",
    },

    // product: 11
    {
      productName: "Comfy Gray Pants",
      category: "Jacket",
      price: "55",
      image: "./images/jacket-2.jpg",
    },

    // product: 12
    {
      productName: "Comfy Gray Pants",
      category: "Topwear",
      price: "30",
      image: "./images/topwear-2.jpg",
    },

    // product: 13
    {
      productName: "Comfy Gray Pants",
      category: "Watch",
      price: "41",
      image: "./images/watch-3.jpg",
    },

    // product: 14
    {
      productName: "Comfy Gray Pants",
      category: "Jacket",
      price: "67",
      image: "./images/jacket-3.jpg",
    },

    // product: 15
    {
      productName: "Comfy Gray Pants",
      category: "Topwear",
      price: "23",
      image: "./images/topwaer-4.jpg",
    },
  ],
};
//========================================================
// get search-box
const searchBox = document.getElementById('search-box');

// get search-btn
const searchBtn = document.getElementById('search-btn');

// get all items-button
const itemsBtn = document.getElementById('items-button');

// get all products container
const allProducts = document.getElementById('all-products');


// get each one product data through loop
for(let allData of products.data){
    // create product card container 
    const cardsContainer = document.createElement('div');
    // add class to style each one card
    cardsContainer.classList.add('cards-container');
    cardsContainer.setAttribute('data-category', allData.category);

    //-----> create img container
    const imgContainer = document.createElement('div');
    // add class to style each one img
    imgContainer.classList.add('img-container');
    const images = document.createElement('img');
    images.setAttribute('src', allData.image);

    //-----> each one producty card title & description parent container
    const descriptionContainer = document.createElement('div');
    // add class to style each one card
    descriptionContainer.classList.add('cards-description');

    // create each one product card content tite
    const cardsTitle = document.createElement('h2');
    cardsTitle.textContent = allData.productName;

    // create each one product card content price button
    const cardsPriceBtn = document.createElement('button');
    cardsPriceBtn.textContent = '$'+ allData.price;


    //-----> Append all elements to the products section so it appears on the page.
    imgContainer.appendChild(images);
    cardsContainer.appendChild(imgContainer);
    descriptionContainer.appendChild(cardsTitle);
    descriptionContainer.appendChild(cardsPriceBtn);
    cardsContainer.appendChild(descriptionContainer);
    allProducts.appendChild(cardsContainer);
}


//-----> get categorywise product data once any button clicked
itemsBtn.addEventListener('click', function(event){
  const clickedBtn = event.target;
  const eachOneProductsCard = document.querySelectorAll('.cards-container')

  // check if clicked anywhere else expcet button 
  if(clickedBtn.tagName !== 'BUTTON') return;

  // get each one same catergory wise products 
  for(let value of eachOneProductsCard){
    if(clickedBtn.textContent === 'All' || value.getAttribute('data-category') === clickedBtn.textContent){
     value.style.display = 'block'; 
  }else{
      value.style.display = 'none';
  }
  }
})
