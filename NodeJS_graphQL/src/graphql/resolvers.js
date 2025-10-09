const { products } = require("../data/products.js");

// contains the resolver functions for the GraphQL API

const resolvers = {
  Query: {
    products: () => products,
    product : (_, {id}) => products.find(product => product.id === id)
  },
};

module.exports = resolvers;
