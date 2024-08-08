import { User, Note, Tag } from "@/lib/definitions"
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
export const ADD_NEW_TAG_FOR_NOTE = gql`
    mutation CreateTag($name: String, $userId: Int, $noteId: Int){
        createTag(name: $name, userId: $userId, noteId: $noteId){
            name
            id
        }
    }
`

export const DELETE_TAG = gql`
    mutation DeleteTag($tagId: Int, $noteId: Int){
        deleteTag(tagId: $tagId, noteId: $noteId){
            msg
        }
    }
`


const GET_ALL_TAGS_FOR_NOTE = gql`
    query GetAllTagsForNote($noteId: Int) {
        getAllTagsForNote(noteId: $noteId) {
            id
            name
        }
    }
`
const  GET_ALL_TAGS_FOR_USER = gql`
    query GetAllTagsForUser($userId: Int){
        getAllTagsForUser(userId: $userId){
            id 
            name
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

export const useGetAllTags = (noteId) => {
  const { loading, error, data } = useQuery(GET_ALL_TAGS_FOR_NOTE, {
    variables: { noteId },
  });

  return { loading, error, tags: data?.getAllTagsForNote || [] }; // Directly returning the tags array
};

export const useGetOneUserByEmail = async({email}) => {
    const {data, error , loading } = useQuery<{getOneUserByEmail: User}>(GET_ONE_USER_BY_EMAIL, {
        variables:{
            userEmail: email
        }
    })

    return data?.getOneUserByEmail.email;
}

export const useGetAllTagsForUser = (userId) => {
    const {data} = useQuery(GET_ALL_TAGS_FOR_USER, {
        variables:{
            userId: userId
        }
    });

    return data?.getAllTagsForUser || [];
}
