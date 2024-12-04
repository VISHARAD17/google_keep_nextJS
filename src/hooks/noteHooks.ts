import { gql, useQuery } from "@apollo/client";
import { Note, User } from "@/lib/definitions";

// since we do not have user id from the UI, use find
// by email instead
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
const GET_ALL_NOTES_AND_USER_BY_EMAIL = gql`
    query getAllEmail($email: String){
        getAllNotesByEmail(email: $email){
          notes {
            title
            content
            id 
            userId
          } 
          user {
            id
          }
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

export const useGetAllNoteByEmail = ({email}) =>{
    return useQuery<{getAllNotesByEmail: {user: User, notes: [Note]}}>(GET_ALL_NOTES_AND_USER_BY_EMAIL, {
        variables:{
            email:email
        }
    })
}

export const useGetTagForNote = ({id}) =>{
    return useQuery<{getAllTagsForNote: Note}>(GET_ALL_TAGS_FOR_NOTE, {
        variables:{
            noteId: id
        }
    })
}
