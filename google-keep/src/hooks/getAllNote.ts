import { gql } from "@apollo/client";

const GET_ALL_NOTES = gql`
    query getAll($userId: Int){
        getAllNotes(userId: $userId){
            title
            content
            userId
            tags {
                name 
            }
        }
    }
`