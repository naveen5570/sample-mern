import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import ReqCard from './ReqCard';
import Header from './Header';
import Headertop from './Headeradmintop';

class RequestList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reqqs: [],
      prof:[]
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("professional-token");
    axios.get('/api/professionals/get-professional/'+token).then(res => {
      this.setState({
        prof: res.data
       });
       //console.log('status=>'+res.data.status);
       if(res.data.status==2)
    {
    window.location.href="/disapproved-professional";
    }
    else if(res.data.status==0)
    {
    window.location.href='/waiting-for-approval'; 
    }
    else if(res.data.status==3)
    {
    window.location.href='/professional-profile'; 
    }
    })
    .catch(err =>{
      console.log('Error from professional');
    })
    

    
    if(!token)
    {
      window.location.href = "/login-as-professional";
    }
    
    
    axios
      .get('/api/requests/request-list')
      .then(res => {
        this.setState({
          reqqs: res.data
         });
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
        <Header />
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

export default RequestList;