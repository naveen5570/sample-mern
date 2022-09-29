import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import Header from './Headeradmin';

class AddService extends Component {
  constructor() {
    super();
    
    this.state = {
      name:'',
      description:''
    };
    
  }

  
  

  componentDidMount() {
    const token = localStorage.getItem("admin_token");
    if(!token)
    {
      window.location.href = "/admin";
    }
    const u = jwtDecode(token);
    console.log(u.id);
    
      
  };

  

  onChange = e => {
    //alert('tt');
    this.setState({ [e.target.name]: e.target.value });
    
      
    
  };

  onSubmit = e => {
    //alert('clicked');
    const token = localStorage.getItem("admin_token");
    const u = jwtDecode(token);
    e.preventDefault();

    const data = {
          name: this.state.name,
          description: this.state.description
          
      
    };
    //alert('clicked');
    axios
      .post('/api/services/create', data)
      .then(res => {
        this.setState({
            name: '',
            description: ''
        });
        alert(res.data.msg);
        //window.location.href = "/request-created"; 
      })
      .catch(err => {
        //alert(err.data.msg);
        console.log("Error in Creating request");
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
      <div className="dashboard-top-header">
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          
        <Link to='/'><img src="/img/logo.jpg" /></Link>
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
      <div className="dashboard-right">
        <h1>Add a Service</h1>

        <form noValidate onSubmit={this.onSubmit} className="request form" encType="multipart/form-data">
          <div className="card-box">
            <h4>Service Information</h4>
            
            
            <div className="row">
            <div className="col-md-12 form-group">
                <label className="form-label">Service Name</label>
                <input className="form-control" type="text" name="name" placeholder="Type here" value={this.state.name} onChange={this.onChange} />
              </div>
              <div className="form-group col-md-12">
                <label className="form-label">Service Description</label>
                <textarea className="form-control" name="description" placeholder="Type here" value={this.state.description} onChange={this.onChange}></textarea>
                <br/>
                <input className="form-control button-nav" name="submit" value="Add Service" type="submit" />
              </div>
              
            </div>
            
            
            
          </div>
          
          
          
        </form>

      </div>
</div>
</div>
</div>
</div>

      


    );
  }
}

export default AddService;