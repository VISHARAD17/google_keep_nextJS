import { gql, useMutation } from "@apollo/client"

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