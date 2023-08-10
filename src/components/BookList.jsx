import axios from "axios";
import React, { useEffect,useState } from "react";
import BookCard from "./BookCard";
import { Link } from "react-router-dom";
import "../App.css";

function BookList(){
     const[books,setbooks]=useState([]);

    useEffect(()=>{
        // axios.get("http://localhost:5000/book")
        axios.get("https://test-backend-t40v.onrender.com/book")
        //axios.get("https://backend-sj7r.onrender.com/book")
        .then((res)=>{
            console.log(res.data);
            setbooks(res.data);

        })
        .catch((err) => {
            console.log("Error from BookList");
          });
    },[]);

    const deleteBook=(booksId)=>{
        axios
        .delete(`https://test-backend-t40v.onrender.com/book/${booksId}`)
        //.delete(`http://localhost:5000/book/${booksId}`)
        .then((res) => {
            console.log(`Book with id ${booksId} deleted`);
            setbooks(books.filter((book) => book._id !== booksId));
          })
          .catch((err) => {
            console.log(`Error deleting book with id ${booksId}`);
          });
    }

    const bookList=books.length===0?
                    "there is no book ":
                    books.map((books,key)=>(
                    <BookCard books={books} deleteBook={deleteBook}key={key}></BookCard>
            )

    )

    return(
        <div className="BookList">
            <div className="container">
            <div className="row">
            <div className="col-md-12">
            <br />   
        <h1 className="display-4 text-center">booklist</h1>
        </div>

        <div className="col-md-11">
        <Link to="/addbook" className="btn btn-outline-warning float-right">
            +Add New Book
            </Link>
            <br />
            <br />
            <hr />
            </div>
            </div>
        <div className="list">{bookList}</div>
        </div>
        </div>
    )
}
export default BookList;