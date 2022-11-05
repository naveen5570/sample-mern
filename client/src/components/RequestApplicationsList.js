import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import ReqCard from './UserReqApplied';
import Headertop from './Headeradmintop';

class RequestApplicationsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reqqs: []
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    if(!token)
    {
      window.location.href = "/";
    }
    const u = jwtDecode(token);
    console.log(u.id);
    axios
      .get('/api/requests/request-applications/'+u.id)
      .then(res => {
        this.setState({
          reqqs: res.data
         })
      })
      .catch(err =>{
        console.log('Error from ShowBookList');
      })
      
  };
  

  render() {
    const reqqs = this.state.reqqs;
    //console.log("PrintBook: " + JSON.stringify(reqqs));
    let reqList;

    if(!reqqs) {
      reqList = "there is no book record!";
    } else {
      reqList = reqqs.map((reqq, k) =>
      <ReqCard reqq={reqq} key={k} />
      );
    }

    return (
      <div>
<Headertop/>
      <div className="container-fluid">
      <div className='row'>
      <div className="col-md-2 dash_menu">
        <div className="left_menu">
        <ul><li><a className="lang">Dashboard </a></li>
            <li><Link to='/create-request' className="lang">Create Request</Link></li>
            <li ><Link to='/pending-requests' className="lang">Pending Requests</Link></li>
            <li ><Link to='/user-active-requests' className="lang">Active Requests</Link></li>
            
            <li><a className="lang">Closed Requests</a></li>
            <li className='active_dash'><Link className="lang" to='/request-applications-list'>Request Applications</Link></li>
            <li><Link to='/user-logout' className="lang">Logout</Link></li>
        </ul>
        </div>
        </div>
        <div className='col-md-10 menu-right'>
      
      <div className="ShowBookList">
        <div className="container">
          <br/><br/>

          <div className="list">
             {reqList}
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

export default RequestApplicationsList;