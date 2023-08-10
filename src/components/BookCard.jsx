import React from "react"
import "../App.css";

function BookCard({books,deleteBook}){
    
    const handledelete=()=>{
    deleteBook(books._id)
    };

    return(
    <div className="BookList">
        <div className="list">
          <div className="card-container">
           <img
            src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
            alt="Books"
            height="200"
          />
           <div className="desc">
            <h2>{books.tittle}</h2>
            <h3>{books.author}</h3>
            <p>{books.descripion}</p>

            <button  className="btn btn-warning float-right float-bottom decorated-btn"
            onClick={handledelete}>Delete</button>
    </div>
    </div>
    </div>
    </div>
)}
export default BookCard