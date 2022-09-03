import React, { Component } from 'react';
import '../App.css';
import axios, { Axios } from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';

class DisapproveProfessional extends Component {
  constructor() {
    super();
    this.state = {
      phone:''
    };
  }



  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      phone: this.state.phone
    };

    axios
      .post('/api/users',data)
      .then(res => {
        this.setState({
          phone: ''
        });
        alert(res.data.msg);
      })
      .catch(err => {
        alert(err.data.msg);
        console.log("Error in CreateBook!");
      })
  };

  

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

    const d_reason = localStorage.getItem("d_reason");
    return (
      <div>
      <div className="dashboard-top-header">
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          
        <Link to='/'><img src="./img/logo.jpg"/></Link>
        </div>
        <div className="col-md-7">
      
        </div>
        <div className="col-md-3">
          
        </div>
      </div>
      </div>
      </div>
      
      
      <div className='container-fluid'>
      <div className='row'>
      
        <Header />
        <div className='col-md-10 menu-right'>
        <div className="dashboard-right thanks_msg">
        <div className="content-left">
                <h3>Registration Disapproved!</h3>
<h5>Your Registration is Disapproved by the admin because of the Following Reason:<br/> {d_reason}</h5>

          </div></div>
          
        </div>
        </div>
      </div>
      </div>
    );
  }
}

export default DisapproveProfessional;