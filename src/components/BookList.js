import { useContext } from "react";
import BooksContext from "../context/books";
import BookShow from "./BookShow";

function BookList() {
    // const {count,incrementCount}  = useContext(BooksContext);
//   const value = useContext(BooksContext);
    const {books} = useContext(BooksContext);
  const renederedBooks = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} />
    );
  });
  return (
    <div className="book-list">
      
      {renederedBooks}
    </div>
  );
}

export default BookList;
