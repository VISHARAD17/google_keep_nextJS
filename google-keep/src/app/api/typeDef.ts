export const typeDefs = `
  type Query {
    hello: String
  }

type Book {
    id: Int
    name:String
    author:String
}

type Query {
    getAllBooks: [Book]
}

`;
