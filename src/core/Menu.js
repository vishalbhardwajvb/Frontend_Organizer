import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout,isAuthenticated } from "../auth/helper/helper";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#2ecc72",borderTop:".5px solid #2ecc72" };
  } else {
    return { color: "#FFFFFF" };
  }
};



const Menu = ({ history }) => (
  
  <div style={{borderBottom:".5px solid #2ecc72",position:"fixed",width:"100%",zIndex:"10"}}>











<nav class="navbar navbar-dark bg-dark text-white">


<ul className="nav bg-dark">
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link menuLinks" to="/">
          Home
        </Link>
      </li>
       
       {
         isAuthenticated() && isAuthenticated().user.role===0 && ( <li className="nav-item">
         <Link
           style={currentTab(history, "/user/dashboard")}
           className="nav-link menuLinks"
           to="/user/dashboard"
         >
           Dashboard
         </Link>
       </li>)
       }

     
        {
          isAuthenticated() && isAuthenticated().user.role===1 && (<li className="nav-item">
          <Link
            style={currentTab(history, "/admin/dashboard")}
            className="nav-link menuLinks"
            to="/admin/dashboard"
          >
            Admin
          </Link>
        </li>)
        }
      
     
        {
          ! isAuthenticated() && (<Fragment>
            <li className="nav-item">
              <Link
                style={currentTab(history, "/signup")}
                className="nav-link menuLinks"
                to="/signup"
              >
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={currentTab(history, "/signin")}
                className="nav-link menuLinks"
                to="/signin"
              >
                Sign In
              </Link>
            </li>
          </Fragment>)
        }
    

        {
          isAuthenticated() && (
            <li className="nav-item">
         <Link>
         <span
            className="nav-link text-warning menuLinks"
            onClick={()=>signout(()=>{
              history.push("/");
            })}
          >
            Signout
          </span>
         </Link>
        </li>
          )
        }

    </ul>




  <form class="form-inline">
    <input class="form-control mr-sm-2 mr-3" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>


  </div>
);

export default withRouter(Menu);
