import { User } from "@/lib/definitions"
import { gql, useMutation, useQuery } from "@apollo/client"

export const DELETE_NOTE = gql`
    mutation DeleteNote($noteId: Int){
        deleteNote(noteId: $noteId){
            msg 
        }
    }
`

export const UPDATE_NOTE = gql`
    mutation UpdateNote($noteId: Int, $title:String, $content: String){
        updateNote(noteId: $noteId, title: $title, content: $content){
            id
            title
            content
        }
    }
 `

export const ADD_NEW_NOTE = gql`
    mutation AddNewNode($title: String, $content:String, $userId: Int){
        addNote(title:$title, content: $content, userId: $userId){
            id
            title
            content
       }
    }
`

export const GET_ONE_USER_BY_EMAIL = gql`
    mutation GetOneuserByEmail($userEmail: String){
        getOneUserByEmail(userEmail: $userEmail){
            id
            name
            email
        }
    }
`

export const useDeleteNote = async(id) => {
    const [deleteNoteFunction] = useMutation(DELETE_NOTE) ;
    console.log("hitting delete")
    const res = await deleteNoteFunction({
        variables:{
            noteId: id
        }
    })
}

export const useUpdateNote = async({id, title, content}) => {
    const [updateFunction] = useMutation(UPDATE_NOTE, {
    })

    const res = await updateFunction({
        variables:{
            noteId: id, 
            title:title, 
            content:content
        }
    })
}

export const useGetOneUserByEmail = async({email}) => {
    const {data, error , loading } = useQuery<{getOneUserByEmail: User}>(GET_ONE_USER_BY_EMAIL, {
        variables:{
            userEmail: email
        }
    })

    return data?.getOneUserByEmail.email;
}