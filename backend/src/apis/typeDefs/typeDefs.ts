const myTypeDefs = `
type Book {
    id: Int
    name:String
    author:String
}

type Msg{
    msg: String
}

type Note {
    id:Int 
    name: String
}

type Tag {
    id:Int 
    name: String
}

type User {
    id:Int 
    name: String
    email: String
}

type AuthPayload {
    token: String!
    user: User!
}

# get all data
type Query {
    getAllBooks: [Book]
    getAllNotes: [Note]
    getAllTags: [Tag]
    getAllUsers: [User]
    me: User
}

type Mutation {
    insertBook(name: String, author: String): Book
    insertDummyData: Msg
    deleteAllData: Msg
    deleteOneById(id:Int): Msg
    updateOneByid(id:Int, updatedName:String, updatedAuthor:String): Msg
    signUp(name: String!, email: String!, password: String!): AuthPayload!
    signIn(email: String!, password: String!): AuthPayload!
    googleSignIn(token: String!): AuthPayload!
}

`;

export default myTypeDefs;
