import React, { Component } from 'react';
import '../App.css';
import '../script.js';
import { Link } from 'react-router-dom';

class Headeradmin extends Component {
  constructor() {
    super();
    this.state = {
      phone:''
    };
  }



  
  

  render() {
    /* const books = this.state.books;
    console.log("PrintBook: " + books);
    let bookList;

    if(!books) {
      bookList = "there is no book record!";
    } else {
      bookList = books.map((book, k) =>
        <BookCard book={book} key={k} />
      );
    }
*/
    return (
      <div className="col-md-2 dash_menu">
        <div className="left_menu">
        <ul><li><Link to="/admin">Dashboard </Link></li>
            <li><Link to="/admin/professionals-list">Professionals List</Link></li>
            <li><Link to="/admin/user-list">Users List</Link></li>
            <li><Link to="/admin/request-list">Request List</Link></li>
            <li><Link to="/admin/home">Home</Link></li>
            <li><Link to="/admin/logout">Logout</Link></li>
        </ul>
        </div>
        
        </div>
        
        
    );
  }
}

export default Headeradmin;