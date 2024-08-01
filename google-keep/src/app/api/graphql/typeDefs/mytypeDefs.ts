export const myTypeDefs = `
type Book {
    id: Int
    name:String
    author:String
}

type Msg{
    msg: String
}

type User {
    id: Int 
    name: String 
    email: String 
    password: String
}

type Author {
    id: Int 
    name: String 
    email: String 
    password: String
    post : [Post]
}

type Post {
    id: Int 
    name: String
    author: Author
    authorId: Int
}

type Query {
    getAllBooks: [Book]
    getOneBook(id: Int!): Book
    getOneUser(email:String) : User
}

type Mutation {
    insertBook(name: String, author: String): Book
    insertDummyData: Msg
    deleteAllData: Msg
    deleteOneById(id:Int): Msg
    updateOneByid(id:Int, updatedName:String, updatedAuthor:String): Msg
    registerUser(name:String, email:String, password:String) : User
    addPostForAuthor(name:String, authorId: Int) : Post
    registerAuthor(name:String, email:String, password:String): Author
}   
`;
