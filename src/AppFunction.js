import { useState } from "react";
import BookForm from "./components/BookForm/BookForm";
import BooksList from "./components/BooksList/BooksList";
import shortid from 'shortid';


const App = () => {

  const [books, setBooks] = useState([
    {id: 1, title: 'of Mice and Men', author: 'John Stainbeck'},
    {id: 2, title: 'the Witcher', author: 'Andrzej Sapkowski'}
  ]);

  const removeBook = bookId => {
    setBooks(books.filter(book => book.id!== bookId))
  };
 
  const addBook = newBook => {
    setBooks([...books,{id: shortid(), title: newBook.title, author: newBook.author}]);
  }
 
  return (
    <div>
      <h1>Boohs-App</h1>
      <BooksList books={books} removeBook={removeBook}/>
      <BookForm addBook={addBook}/>
    </div>
  );
  }

export default App;
