import React, { Component } from 'react';
import '../App.css';
import axios, { Axios } from 'axios';
import { Link } from 'react-router-dom';
import Headertop from './Headeradmintop';

class HiredSuccessfully extends Component {
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
    return (
      <div>
      <Headertop/>
      
      
      <div className='container-fluid'>
      <div className='row'>
      
        <div className="col-md-2 dash_menu">
        <div className="left_menu">
        <ul><li><a className="lang">Dashboard </a></li>
            <li><Link to='/create-request' className="lang">Create Request</Link></li>
            <li><Link to='/pending-requests' className="lang">Pending Requests</Link></li>
            <li className='active_dash'><Link to='/user-active-requests' className="lang">Active Requests</Link></li>
            <li><a className="lang">Closed Requests</a></li>
            <li><Link to='/request-application-list' className="lang">Request Applications</Link></li>
            <li><Link to='/user-logout' className="lang">Logout</Link></li>
        </ul>
        </div>
        </div>
        <div className='col-md-10 menu-right'>
        <div className="dashboard-right thanks_msg">
        <div className="content-left">
                <h3 className="lang">Payment Completed Successfully!</h3>
<h5 className="lang">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>

          </div></div>
          
        </div>
        </div>
      </div>
      </div>
    );
  }
}

export default HiredSuccessfully;