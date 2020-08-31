import React,{useState,useEffect} from "react"
import Base from "../core/Base"
import { isAuthenticated } from "../auth/helper/helper"
import { Link } from "react-router-dom"

import {getAllUser,deleteUser}  from "./helper/helper"

const ManageUser=()=>{

    const [users,setCategories]=useState([]);

    const {user}=isAuthenticated()

    const getAllUserHelper=()=>{

        getAllUser().then(data=>{
            if(data.error)
            {
                console.log("GET ALL Category DATA.ERROR found")
            }
            else
            {
                setCategories(data)
            }
        }).catch(err=>console.log("Not GET ALL Category Internal func ERROR "))
        
    }

    const deleteThisUser = (userId) => {
        deleteUser(userId).then(data => {
          if (data.error) {
            console.log(data.error);
          } else {
            getAllUserHelper();
          }
        });
      };

    useEffect(()=>{
      getAllUserHelper();
    },[])



    return(
        <Base title="All Categories" description="Here you can manipulate Categories ">
          <Link to="/admin/dashboard" className="btn btn-md btn-info mb-3">
        Back To DashBoard
      </Link>
                <h4 className="card-header text-success">User Infomation</h4>

<table class="table  border border-info table-striped table-dark">
  <thead className="border border-info">
    <tr>
      <th className="text-center" scope="col">Sr No</th>
      <th className="text-center" scope="col">User Name</th>
      {/* <th className="text-center" scope="col">Updation</th> */}
      <th className="text-center" scope="col">Deletion</th>
    </tr>
  </thead>
  <tbody>

    {
     users.map((user1,key)=>{
        return(
          <tr>
          <th className="text-center" scope="row">{key+1}</th>
        <td className="text-center">{user1.name}</td>
          
        {/*    <td className="text-center">

           <Link
                className="btn btn-success"
                to={`/admin/updateCategory/${user1._id}`}
                >
                <span className="">Update</span>
        </Link>
            
        </td> */}

        <td className="text-center">
        <button
                onClick={() => {
                deleteThisUser(user1._id);
                }}
                className="btn btn-danger"
               >
                 Delete
            </button>
        </td>
        

        </tr>
        
        

        )
    
         }
      )
    }
        </tbody>
        </table>

        </Base>
)
}

export default ManageUser