// contains the schema definition for the GraphQL API

const { gql } = require("graphql-tag");

const typeDefs = gql`
  type Product {
    id: ID!
    title: String!
    price: Float!
    category: String!
    inStock: Boolean!
  }

  type Query {
    products: [Product!]!
    product(id: ID!): Product
  }

  type Mutation {
    createProduct(
      title: String!
      price: Float!
      category: String!
      inStock: Boolean!
    ): Product!

    deleteProduct(id: ID!): Boolean!

    updateProduct(
      id: ID!
      title: String
      price: Float
      category: String
      inStock: Boolean
    ): Product!
  }
`;

// ! means required field
// we gave query type with two fields: products and product(id: ID!) that will take id as argument and return a single product

module.exports = typeDefs;
