const myTypeDef = `
type Book {
    id: Int
    name:String
    author:String
}

type Msg{
    msg: String
}

# get all books
type Query {
    getAllBooks: [Book]
}

type Mutation {
    insertBook(name: String, author: String): Book
    insertDummyData: Msg
    deleteAllData: Msg
    deleteOneById(id:Int): Msg
    updateOneByid(id:Int, updatedName:String, updatedAuthor:String): Msg
}

`;

export default myTypeDef;
