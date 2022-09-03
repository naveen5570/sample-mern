import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import Header from './Headeradmin';

class ServiceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reqqs: []
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("admin_token");
    if(!token)
    {
      window.location.href = "/admin/login";
    }
    const u = jwtDecode(token);
    console.log(u.id);
    
    axios
      .get('/api/services')
      .then(res => {
        this.setState({
          reqqs: res.data
         });
      })
      .catch(err =>{
        console.log('Error from ServiceList');
      })
      
      
  };
  

  render() {
    const reqqs = this.state.reqqs;
    

    return (
      <div>
<div className="dashboard-top-header">
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          
        <Link to='/' ><img src="./img/logo.jpg"/></Link>
        </div>
        <div className="col-md-7">
      
        </div>
        <div className="col-md-3">
          
        </div>
      </div>
      </div>
      
      </div>
      <div className="container-fluid">
      <div className='row'>
        <Header />
        <div className='col-md-10 menu-right'>
      
      <div className="ShowBookList">
        <div className="container">
        <br/><br/>

<div className="list">
<h1 className="page-title">Services List</h1>
<div className="card-container1 col-md-12">

 <div className="desc list_container">
  
<table id="datatable">
          <tr><th>Name</th><th>Description</th><th>Added On</th><th>Action</th></tr>
   {reqqs.map(reqq => {
          return <tr><td>{reqq.name}</td><td>{reqq.description}</td><td>{reqq.createdAt}</td><td><Link to={`/admin/edit-service/${reqq._id}`}>Edit</Link>/<Link to={`/admin/delete-service/${reqq._id}`}>Delete</Link></td></tr>
            
        })}
   </table>
   </div>
   </div>
</div>
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      
    );
  }
}

export default ServiceList;