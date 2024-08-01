import { gql, useMutation } from '@apollo/client';
import { User } from '../lib/definitions';

export const REGISTER_USER = gql`
    mutation RegisterUser ($name: String!, $email: String!, $password: String!){
        registerUser(name: $name, email: $email, password: $password){
            id 
            name
            email
    }
}
`;
