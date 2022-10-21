import axios from 'axios';

const graphqlMutation = {
  operationName: 'createProduct',
  query: `mutation createProduct {
      createProduct(data: { 
                      name: "graphQLProduct",
                      price: 14,
                      description: "graphQLProduct",
                      photoURL: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt40015891deaa4019/6265b5649084154bb3b408c0/Lionel_Messi.jpg",
                      stock: 23 }) {
                          id
                          name
                          price
                          description
                          photoURL
                          stock
                      }
      }`,
};

const graphqlQuery = {
  operationName: 'queryGraphProduct',
  query: `query queryGraphProduct{
      getProduct(id: "632e833d00ddfbd0970cb16a") {
            name
            price
            description
            photoURL
            stock
        }
    }`,
};

const options = {
  url: 'http://localhost:8080/graphql',
  method: 'POST',
  data: graphqlMutation,
};

const response = axios(options);

console.log(response);
