import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link, useHistory, useParams } from 'react-router-dom';
import Header from './Header';
import Stripe from 'react-stripe-checkout';
import Headertop from './Headeradmintop';

class ViewApplication extends Component {
  
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
      .get('/api/applications/view-application/'+params.id)
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
      <Headertop/>
	  <div className='container-fluid'>
      <div className='row'>
      <div className="col-md-2 dash_menu">
        <div className="left_menu">
        <ul><li><a className="lang">Dashboard </a></li>
            <li><Link to='/create-request' className="lang">Create Request</Link></li>
            <li><a className="lang">Pending Requests</a></li>
            <li><a className="lang">Active Requests</a></li>
            
            <li><a>Closed Requests</a></li>
            <li><Link to='/request-applications-list lang'>Request Applications</Link></li>
            <li><a>Logout</a></li>
        </ul>
        </div>
        </div>
      
		<div className='col-md-10 menu-right'>
      <div className="dashboard-right ">
    <div className="dashboard-cart">
        <h2 className="page-title">{applications.map((application) => (
        <span>{application.appdetails.map((appdetail) => (<span className="lang">{appdetail.repair_explanation}</span>))}</span>
      ))}</h2>
<div className="row">
  <div className="col-md-12 ">{applications.map((application) => (
        <span><strong className="lang">Estimated Time of Service:</strong> <span className="lang">{application.time_of_service} hrs</span></span>
      ))}</div>
      <div className="col-md-12 ">{applications.map((application) => (
        <span><strong className="lang">Fees:</strong> $<span className="lang">{application.fees}</span></span>
      ))}</div>
      <div className="col-md-12 ">{applications.map((application) => (
        <Link className="btn btn-info btn-right lang" to={'/hire/'+application._id}>Hire</Link>
      ))}</div>
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
      <ViewApplication params={params} />
  )
}

//export default ProfessionalApplyRequestForm;