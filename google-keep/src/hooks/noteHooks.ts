import { gql, useQuery } from "@apollo/client";
import { Note } from "@/lib/definitions";

const GET_ALL_NOTES = gql`
    query getAll($userId: Int){
        getAllNoteForUser(userId: $userId){
            title
            id
            content
            userId
            tags {
                name 
            }
        }
    }
`
const GET_ALL_NOTES_BY_EMAIL = gql`
    query getAllEmail($email: String){
        getAllNotesByEmail(email: $email){
           title
           content
           id
           userId 
        }
    }
`

const GET_ALL_TAGS_FOR_NOTE = gql`
    query GetAllTagsForNote($noteId: Int) {
        getAllTagsForNote(noteId: $noteId) {
            id
            title
            tags {
                id
                name
             }
        }
    }
`

export const UPDATE_NOTE = gql`
    query UpdateNote($noteId: Int, $title: String, $content: String){
        updateNote(noteId: $noteId, title: $title, content: $conten){
            title
            content
            id 
        }
    }
`


export const useGetAllNotes = ({id}) =>{
    return useQuery<{getAllNoteForUser: [Note]}>(GET_ALL_NOTES, {
        variables:{
            userId: id
        }
    })
}
export const useGetAllNoteByEmail = ({email}) =>{
    return useQuery<{getAllNotesByEmail: [Note]}>(GET_ALL_NOTES_BY_EMAIL, {
        variables:{
            email:email
        }
    })
}

export const useGetTagsForNote = ({id}) =>{
    return useQuery<{getAllTagsForNote: Note}>(GET_ALL_TAGS_FOR_NOTE, {
        variables:{
            noteId: id
        }
    })
}