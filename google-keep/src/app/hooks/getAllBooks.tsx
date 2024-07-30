import { gql, useQuery } from '@apollo/client';
import { Book } from '../lib/definitions';

const GET_ALL_BOOKS = gql`
  query GetAllBooks {
    getAllBooks {
      id
      name
      author
    }
  }
`;

const GET_ONE_UNIQUE_BOOK = gql`
query  GetUniqueBooks ($id: Int!){
    getOneBook(id: $id){
        id 
        name 
        author
    }
}
`;

export const useGetAllBooks = () => {
  return useQuery<{ getAllBooks: Book[] }>(GET_ALL_BOOKS);
}

export const useUniqueBooks = ({ID}) => {
    return useQuery<{getOneBook: Book}>(GET_ONE_UNIQUE_BOOK, {
        variables:{id:ID}
    })
}
