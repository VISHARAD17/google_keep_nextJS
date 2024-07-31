import { useQuery } from "@apollo/client/react/hooks/useQuery";
import { User } from "@prisma/client";
import gql from "graphql-tag";

const GET_ONE_USER = gql`
    query GetOneUser($email: String){
    getOneUser(email: $email){
        id 
        name
}
}
`
export const useGetOneUser = ({email}) => {
  return useQuery<{ getOneUser: User }>(GET_ONE_USER, 
        {
            variables:{email:email}
        } );
}

