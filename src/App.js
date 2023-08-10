import {BrowserRouter,Routes,Route}from "react-router-dom";
import './App.css';
import BookList from "./components/BookList"
import AddBook from "./components/AddBook";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<BookList/>}></Route>

        <Route path="/addbook" element={<AddBook/>}/>
  
      </Routes>
    </BrowserRouter>
    </div>
     
   
  );
}

export default App;
