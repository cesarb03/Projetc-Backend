const axios = require('axios');

const productId = '6350749d4e934313268f39d9';

const instance = axios.create({ baseURL: 'http://localhost:8080' });

const getAllProducts = async () => {
  try {
    const response = await instance.get(`/api/products`);
    console.log(`getAllProducts Test Response - ${response.data}`);
  } catch (err) {
    console.log(err);
  }
};

const getProductByID = async (productId) => {
  try {
    const response = await instance.get(`/api/products/${productId}`);
    console.log(`getProductByID Test Response - ${response.data}`);
  } catch (err) {
    console.log(err);
  }
};

const addProduct = async () => {
  try {
    const response = await instance.post(`/api/products`, {
      "name": "graphQLProduct",
      "price": 14,
      "description": "graphQLProduct",
      "photoURL": "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt40015891deaa4019/6265b5649084154bb3b408c0/Lionel_Messi.jpg",
      "stock": 23
    });
    console.log(`AddProduct Test Response - ${response.data}`);
  } catch (err) {
    console.log(err);
  }
};

const updateProduct = async (productId) => {
  try {
    const response = await instance.put(`/api/products/${productId}`, {
      price: 100,
    });
    console.log(`UpdateProduct Test Response - ${response.data}`);
  } catch (err) {
    console.log(err);
  }
};

const deleteProduct = async (productId) => {
  try {
    const response = await instance.delete(`/api/products/${productId}`);
    console.log(`getAllProducts Test Response - ${response.data}`);
  } catch (err) {
    console.log(err);
  }
};

// getAllProducts()
// getProductByID(productId)
addProduct(); //No pude agregar productos
// updateProduct(productId)
// deleteProduct(productId)
