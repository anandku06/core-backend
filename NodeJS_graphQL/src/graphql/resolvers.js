const products = require("../data/products");

// contains the resolver functions for the GraphQL API

const resolvers = {
  Query: {
    products: () => products,
  },
};


module.exports = { resolvers };