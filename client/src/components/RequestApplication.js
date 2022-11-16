import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { Link,useParams } from 'react-router-dom';
import ReqCard from './AppCard';
import Headeruser from './Headeruser';

class RequestApplication extends Component {
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
    
    const params = this.props.params;
    console.log(u.id);
    axios
      .get('/api/applications/request-applications/'+params.id)
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
    console.log("PrintBook: " + JSON.stringify(reqqs));
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
      <div className="container-fluid">
      <div className='row'>
      <Headeruser/>
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

export default () => {
  const params = useParams();
  //console.log(params);
return (
    <RequestApplication params={params} />
)
}