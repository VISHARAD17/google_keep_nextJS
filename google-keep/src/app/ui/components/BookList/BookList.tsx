'use client';

import { useGetAllBooks } from "../../../hooks/getAllBooks";
import { Book } from "../../../lib/definitions";

export const BookList = () => {
  const { loading, error, data } = useGetAllBooks();

  if (loading) return <p>Loading...</p>; // can use diff component here
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Books from DB for id 1</h1>
      <ul>
        {data?.getAllBooks.map((book: Book) => (
          <li key={book.id}>{book.name} written by {book.author}</li>
        ))}
             </ul>
    </div>
  );
}
