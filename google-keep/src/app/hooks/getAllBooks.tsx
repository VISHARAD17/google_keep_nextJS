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

export const useGetAllBooks = () => {
  return useQuery<{ getAllBooks: Book[] }>(GET_ALL_BOOKS);
}
