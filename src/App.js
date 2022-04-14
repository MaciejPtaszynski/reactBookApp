import React, { useState } from "react";
import BookForm from "./components/BookForm/BookForm";
import BooksList from "./components/BooksList/BooksList";
import shortid from 'shortid';


class App extends React.Component {

  state = {
    books: [
    {id: 1, title: 'of Mice and Men', author: 'John Stainbeck'},
    {id: 2, title: 'the Witcher', author: 'Andrzej Sapkowski'}
    ]
  };

  removeBook = bookId => {
    this.setState({books: this.state.books.filter(book => book.id!== bookId)})
  };
 
  addBook = newBook => {
    this.setState({books:[...this.state.books, {id: shortid(), title: newBook.title, author: newBook.author}] });
  }
  render() {
    const {books} = this.state;
    const {removeBook, addBook} = this;
    return (
      <div>
        <h1>Boohs-App</h1>
        <BooksList books={books} removeBook={removeBook}/>
        <BookForm addBook={addBook}/>
      </div>
    );
  } 
  }

export default App;
