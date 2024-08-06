import { gql } from "@apollo/client";

export const DELETE_TAG = gql`
    mutation DeleteTag($tagId: Int){
        deleteTag(tagId: $tagId){
            msg
        }
    }
`