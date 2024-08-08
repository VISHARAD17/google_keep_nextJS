export const myTypeDefs = `
type Msg{
    msg: String
}

type User {
    id: Int 
    name: String 
    email: String 
    password: String
}

type Tag {
    id: Int 
    name: String
    userId: Int
    noteId: Int
}

type Note {
    id: Int 
    title: String
    content: String
    userId: Int
    tags: [Tag]
}

type AllData {
    notes: [Note]
    user: User
}

type Query {
    # Note
    getAllNoteForUser(userId: Int): [Note]
    getAllTagsForNote(noteId: Int): [Tag]
    getAllNotesByEmail(email: String): AllData

    # Tag
    getAllTagsForUser(userId: Int): [Tag]

    # User
    getAllUsers: [User]
    getOneUserById(userId: Int): User
    getOneUserByEmail(userEmail: String): User
}

type Mutation {
    # note
    addNote(title:String, content:String, userId: Int): Note
    deleteNote(noteId: Int): Msg
    updateNote(noteId:Int, title:String, content: String): Note

    # Tag
    createTag(name:String, userId:Int, noteId:Int) : Tag
    deleteTag(tagId:Int): Msg

    # User
    createUser(name: String, email:String, password: String): User
    deleteUserAndItsData(userId: String): Msg
    updateUser(name: String, email:String, userId: Int): User
}   
`;
