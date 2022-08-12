import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const AdminRequestListCard = (props) => {
    const  reqq  = props.reqq;

    return(
        <>
                
                
                <tr>
                <td>{ reqq.specialisation }</td>
                <td>{ reqq.address_1 }</td>
                
                <td><Link to={`/view-Professional/${reqq._id}`} >View</Link></td>
                </tr>

                
                
                </>   
            
    )
};

export default AdminRequestListCard;