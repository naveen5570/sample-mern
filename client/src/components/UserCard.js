import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const UserCard = (props) => {
    const  reqq  = props.reqq;

    return(
        <>
                
                
                <tr>
                <td>{ reqq.name }</td>
                <td>{ reqq.email }</td>
                <td>{ reqq.createdAt }</td>
                <td><Link to={`/view-Professional/${reqq._id}`} >View</Link></td>
                </tr>

                
                
                </>   
            
    )
};

export default UserCard;