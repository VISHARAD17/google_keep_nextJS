import { useQuery } from "@apollo/client/react/hooks/useQuery";
import { User } from "@prisma/client";
import gql from "graphql-tag";

const GET_ONE_USER = gql`
    query getOne($email: String) {
        getOneUser(email: $email) {
            email
            name 
            id
        }
    }
`
export const useGetOneUser = ({EMAIL}) => {
  return useQuery(GET_ONE_USER, {
            variables:{email:EMAIL}
        });
}

