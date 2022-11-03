import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link, useHistory, useParams } from 'react-router-dom';
import Header from './Header';
import Stripe from 'react-stripe-checkout';

class ViewRequest extends Component {
  
  constructor() {
    
    //console.log(id);
    
    super();
    this.state = {
      time_of_service:'',
      fees:'',
      request_applied:'',
      professional_id:'',
      application:[]
    };
    
  }

  componentDidMount() {
    const params = this.props.params;
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('/api/requests/'+params.id)
      .then(res => {
        //console.log("Print-showapplicationDetails-API-response: " + JSON.stringify(res.data));
        this.setState({
          application: res.data
        })
        
      })
      .catch(err => {
        console.log("Error from viewAppDetails");
      })
  };

  

  



  

  render() {
    const { id } = this.props;
    const applications = this.state.application;
    console.log(applications);
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
            <li><a className="lang">Logout</a></li>
        </ul>
        </div>
        </div>
        
		<div className='col-md-10 menu-right'>
      <div className="dashboard-right ">
    <div className="dashboard-cart">
        <h2 className="page-title lang">{applications.repair_explanation}</h2>
<div className="row">
  <div className="col-md-8 border-right"><h2 className="lang">Task Description</h2><p className="lang">{applications.repair_explanation}</p></div>
  <div className="col-md-4">
  <h2 className="lang">Job Location</h2>
  <p className="lang">Address: {applications.address_1} {applications.address_2}</p>
  <p className="lang">Zipcode: {applications.zipcode}</p> </div>
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

export default () => {
    const params = useParams();
    //console.log(params);
  return (
      <ViewRequest params={params} />
  )
}

//export default ProfessionalApplyRequestForm;