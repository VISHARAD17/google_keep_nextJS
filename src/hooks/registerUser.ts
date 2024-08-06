import { gql, useMutation, useQuery } from '@apollo/client';
import { User } from '../lib/definitions';

export const REGISTER_USER = gql`
   mutation createUser($name: String, $email: String, $password: String){
        createUser(name: $name, email: $email, password: $password) {
            name
            email
            password
            id
        }
    }  
`;

export const GET_USER_BY_EMAIL = gql`
    query getUserByEmail($userEmail: String){
        getOneUserByEmail(userEmail: $userEmail){
            email
            name
            id
        }
    }
`

export const useGetUserByEmail = (email) =>{
    return useQuery<{getOneUserByEmail: User}>(GET_USER_BY_EMAIL, {
        variables:{
            userEmail:email,
        }
    })
}
