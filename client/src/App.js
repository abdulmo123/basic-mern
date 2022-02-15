import './App.css';
import { useState, useEffect } from 'react';
import Axios from "axios";
function App() {
  const [listOfBooks, setListOfBooks] = useState([]);
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [pages, setPages] = useState(0)

  useEffect(() => {
    Axios.get("http://localhost:8080/api1/getBooks").then((response) => {
      setListOfBooks(response.data);
    })
  }, []);

  const addBooks = () => {
    Axios.post("http://localhost:8080/api1/addBook", {
      title,
      author,
      pages,
    }).then((response) => {
      setListOfBooks([...listOfBooks, {
        title,
        author,
        pages,
      }])
    });
  };

  return (
    <div className="App">
      <div className="booksDisplay">
        <div className="inputs">
          <input
            type="text"
            placeholder=" Title... "
            onChange={(event) => {
              setTitle(event.target.value)
            }}
          />
          <input
            type="text"
            placeholder=" Author... "
            onChange={(event) => {
              setAuthor(event.target.value)
            }}
          />
          <input
            type="text"
            placeholder=" No. of Pages... "
            onChange={(event) => {
              setPages(event.target.value)
            }}
          />
          <button onClick={addBooks}>Add Book</button>
        </div>
        {listOfBooks.map((book) => {
          return (
            <div className="bookList">
              <h1>Title: <table>{book.title}</table></h1>
              <h1>Author: <table>{book.author}</table></h1>
              <h1>Pages: <table>{book.pages}</table></h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;