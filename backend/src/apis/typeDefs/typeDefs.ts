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
    singUp(name:String, email:String!, password:String!): AuthPayload!
    logIn(email: String!, password:String!): AuthPayload
}

`;

export default myTypeDefs;
