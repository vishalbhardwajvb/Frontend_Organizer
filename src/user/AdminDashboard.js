import  React from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper/helper";




const AdminDashBoard=()=>{

    const {user}=isAuthenticated();

    const adminLeftSide=()=>{
        return(
            <div className="card">
            <h4 className="card-header bg-dark text-white">Admin Navigation</h4>
            <ul className="list-group">
                <li className="list-group-item">
                    <Link to="/admin/createCategory" className="nav-link text-success">Create Category</Link>
                </li>

                <li className="list-group-item">
                    <Link to="/admin/getAllCategory" className="nav-link text-success">Manage Categories</Link>
                </li>

                <li className="list-group-item">
                    <Link to="/admin/manageUser" className="nav-link text-success">Manage User</Link>
                </li>

            </ul>
        </div>
        );
    }


    const adminRightSide=()=>{
        return(
            <div className="card mb-4">
                <h4 className="card-header">Admin Infomation</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <span className="badge badge-success mr-2"><h6>{user.name}</h6></span>

                    </li>

                    <li className="list-group-item">
                        <span className="badge badge-success mr-2"><h6>{user.email}</h6></span>
                        
                    </li>

                    <li className="list-group-item">
                        <span className="badge badge-danger">Admin Portal</span>
                    </li>
                </ul>
            </div>
        );
    }
    return(

        <Base
            title="Admin Dashboard"
            description="Your Ability is our Priority"
            className="container bg-success p-4 mb-3"
        >
            <div className="row">
                <div className="col-3">{adminLeftSide()}</div>
                <div className="col-9">{adminRightSide()}</div>
            </div>

        </Base>
      
    )
}

export default AdminDashBoard;