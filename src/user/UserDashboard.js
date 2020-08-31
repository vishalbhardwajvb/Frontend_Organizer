import  React from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper/helper";




const UserDashBoard=()=>{

    const {user}=isAuthenticated();

    const userLeftSide=()=>{
        return(
            <div className="card">
            <h4 className="card-header bg-dark text-white">User Navigation</h4>
            <ul className="list-group">
                <li className="list-group-item">
                    <Link to="/user/createLecture" className="nav-link text-success">Create Lecture</Link>
                </li>

                <li className="list-group-item">
                    <Link to="/user/getAllLecture/forUpdate" className="nav-link text-success">Update Lecture</Link>
                </li>

                <li className="list-group-item">
                    <Link to="/user/getAllLecture/forDelete" className="nav-link text-success">Delete Lecture</Link>
                </li>

            </ul>
        </div>
        );
    }


    const userRightSide=()=>{
        return(
            <div className="card mb-4">
                <h4 className="card-header">User Infomation</h4>
                <ul className="list-group">
                    <li className="list-group-item">
        <span className="badge badge-success mr-2"><h6>{user.name}</h6></span>

                    </li>

                    <li className="list-group-item">
                        <span className="badge badge-success mr-2"><h6>{user.email}</h6></span>
                        
                    </li>

                    <li className="list-group-item">
                        <span className="badge badge-danger">User Portal</span>
                    </li>
                </ul>
            </div>
        );
    }
    return(

       <div>
            {
            user.role===0 && (<Base
                title="User Dashboard"
                description="Your Ability is our Priority"
                className="container bg-success p-4 mb-3"
            >
                <div className="row">
                    <div className="col-3">{userLeftSide()}</div>
                    <div className="col-9">{userRightSide()}</div>
                </div>
    
            </Base>)
        }
       </div>
      
    )
}

export default UserDashBoard;