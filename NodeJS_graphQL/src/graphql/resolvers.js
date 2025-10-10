const { products } = require("../data/products.js");

// contains the resolver functions for the GraphQL API

const resolvers = {
  Query: {
    products: () => products,
    product: (_, { id }) => products.find((product) => product.id === id),
  },

  Mutation: {
    createProduct: (_, { name, price, description, inStock }) => {
      const newProduct = {
        id: String(products.length + 1),
        name,
        price,
        description,
        inStock,
      };
      products.push(newProduct);
      return newProduct;
    },

    deleteProduct: (_, { id }) => {
      const productIndex = products.findIndex((product) => product.id === id);
      if (productIndex === -1) {
        throw new Error("Product not found");
      }
      const deletedProduct = products[productIndex];
      products.splice(productIndex, 1);
      return deletedProduct;
    },

    updateProduct: (_, { id, ...updates }) => {
      const productIndex = products.findIndex((product) => product.id === id);
      if (productIndex === -1) {
        throw new Error("Product not found!");
      }

      const updatedProduct = {
        ...products[productIndex],
        ...updates,
      };

      products[productIndex] = updatedProduct;
      return updatedProduct;
    },
  },
};

module.exports = resolvers;
