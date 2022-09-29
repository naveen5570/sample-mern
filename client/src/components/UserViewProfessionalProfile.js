import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { Link, useParams } from 'react-router-dom';

import Header from './Header';

class UserViewProfessionalProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reqqs: []
    };
  }

  componentDidMount() {
    const params = this.props.params;
    const token = localStorage.getItem("token");
    if(!token)
    {
      window.location.href = "/login";
    }
    const u = jwtDecode(token);
    console.log(u.id);
    
    axios
      .get('/api/professionals/view-profile/'+params.id)
      .then(res => {
        this.setState({
          reqqs: res.data
         })
         
      })
      .catch(err =>{
        console.log('Error from Profile');
      })
      
  };
  

  render() {
    const reqqs = this.state.reqqs;
    //console.log("PrintBook: " + JSON.stringify(reqqs));
    

    return (
      <div>
<div className="dashboard-top-header">
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          
        <Link to='/'><img src="../img/logo.jpg"/></Link>
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
      <div className="col-md-2 dash_menu">
        <div className="left_menu">
        <ul><li><a>Dashboard </a></li>
            <li><Link to='/create-request'>Create Request</Link></li>
            <li ><Link to='/pending-requests'>Pending Requests</Link></li>
            <li className='active_dash'><Link to='/user-active-requests'>Active Requests</Link></li>
            
            <li><a>Closed Requests</a></li>
            <li className='active_dash'><Link to='/request-applications-list'>Request Applications</Link></li>
            <li><Link to='/user-logout'>Logout</Link></li>
        </ul>
        </div>
        </div>
        <div className='col-md-10 menu-right'>
      
        <div className="dashboard-right ">
        <h2 className="page-title">Professional Profile</h2>
    <div className="dashboard-cart">
        
<div className="row">
  <div className="col-md-8">
    <h4><img src="../img/profile-img.jpg" width="80"/>{reqqs.name}</h4>
    <h4>About me</h4>
    <p>{reqqs.description}</p>
    <h4>Professional Information</h4>
    <p><strong>Email:</strong> {reqqs.email}</p>
    <p><strong>Experience:</strong> {reqqs.experience} years</p>
    <p><strong>Standard Fees:</strong> {reqqs.standard_fees}</p>
    </div>
    <div className="col-md-4 profile_right">
    <h4>Basic Information</h4>
      <p><strong>Office Address:</strong> {reqqs.office_address}</p>
      <p><strong>Radius to Cater:</strong> {reqqs.radius_to_cater}</p>
      <p><strong>Registered Address:</strong> {reqqs.registered_address}</p>
      <p><strong>Zipcode:</strong> {reqqs.zipcode}</p>
      <p><strong>City:</strong> {reqqs.city}</p></div>
      
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


//export default UserViewProfessionalProfile;

export default () => {
    const params = useParams();
    //console.log(params);
  return (
      <UserViewProfessionalProfile params={params} />
  )
}