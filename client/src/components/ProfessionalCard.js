import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ProfessionalCard = (props) => {
    const  reqq  = props.reqq;

    return(
        <div className="card-container col-md-12">
           <div className="desc list_container">
                <h1 className="list_title">
                    <Link to={`#`}>
                        { reqq.name }
                    </Link>
                    
                </h1>
                <p>{ reqq.specialisation } </p><p>{ reqq.createdAt }</p>
                <span className="btn-right">&nbsp;</span>
                {reqq.status!=1 ? <Link to={`/admin/approve-professional/${reqq._id}`} className="btn btn-info btn-right">
                        Approve
                    </Link> : <Link to={`/admin/disapprove-professional/${reqq._id}`} className="btn btn-info btn-right">
                        Disapprove
                    </Link>}
            </div>

        </div>
    )
};

export default ProfessionalCard;