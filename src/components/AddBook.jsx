import React,{useState} from "react"
//import React from "react";
import axios from "axios";

function AddBook(){
    const [bookData,setBookData]=useState({
        
                title:"",

                author:"",

                descripion:""

    });



    const handleChange = (event) => {
        setBookData({
          ...bookData,
          [event.target.name]: event.target.value,
        });
      };

    const handleSubmit=(event)=>{
        event.preventDefault();

        axios
        .post("http://localhost:5000/book",bookData)
      .then((res) => {
        console.log(res);
        window.location.href = "/"; // Redirect to homepage
      })
      .catch((err) => {
        console.log(err);
      });
    }
    return(
        <div>
        <div className="container">
        <div className="row">
        <div className="col-md-8 m-auto">
        <div className="col-md-12">
            <br/>
        <h1 className="display-4 text-center">Add Book</h1>
        </div>
        <h3 class="lead text-center">Create a new book</h3>

        <form onSubmit={handleSubmit}>
        <div className="form-group">
        <input type="text"
            placeholder="Title of the Book"
            name="title"
            value={bookData.title}
            onChange={handleChange}
            />
            </div>
            <div className="form-group">
        <input type="text"
        placeholder="Author"
        name="author"
        value={bookData.author}
        onChange={handleChange}
        
        />
        </div>
        <div className="form-group">
        <input type="text"
        placeholder="Description"
        name="descripion"
        value={bookData.descripion}
         onChange={handleChange}
        />
</div>
    <input type="submit" value="Submit"/>
</form>
</div>
</div>
</div>
</div>
    );
}

export default AddBook;