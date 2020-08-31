import React,{useState,useEffect} from "react"
import Base from "../core/Base"
import { isAuthenticated } from "../auth/helper/helper"
import {getAllLectures} from  "./helper/lecture"
import { Link } from "react-router-dom"

import {deleteLecture} from "./helper/lecture"

const GetAllLecture=({
   match
})=>{

    const [lectures,setLectures]=useState([]);

    const {user}=isAuthenticated()

    const getAllLecture=()=>{

        getAllLectures(user._id).then(data=>{
            if(data.error)
            {
                console.log("GET ALL LECTURE DATA.ERROR found")
            }
            else
            {
                setLectures(data.lecture);
            }
        }).catch(err=>console.log("Not GET ALL LECTURE Fetch Internal func ERROR "))
        
    }

    const deleteThisLecture = (lectureId) => {
        deleteLecture(user._id,lectureId).then(data => {
          if (data.error) {
            console.log(data.error);
          } else {
            getAllLecture();
          }
        });
      };

    useEffect(()=>{
        getAllLecture();
    },[])



    return(
        <Base title="Your All Lecture" description="Here you can update your Records ">
          <Link to="/user/dashboard" className="btn btn-md btn-info mb-3">
        Back To DashBoard
      </Link>
                <h4 className="card-header text-success">Lectures Infomation</h4>

<table class="table  border border-info table-striped table-dark">
  <thead className="border border-info">
    <tr>
      <th className="text-center" scope="col">Day</th>
      <th className="text-center" scope="col">Time</th>
      <th className="text-center" scope="col">Topic</th>
      <th className="text-center" scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

    {
      lectures.map((lecture)=>{
        return(
          <tr>
          <th className="text-center" scope="row">{lecture.day}</th>
          <th className="text-center" scope="row">{lecture.time}</th>
          <td className="text-center">{lecture.description}</td>
          
           <td className="text-center">

        {
            match.params.check==='forDelete' && ( <div className="col-12">
            <button
                onClick={() => {
                deleteThisLecture(lecture._id);
                }}
                className="btn btn-danger"
               >
                 Delete
            </button>
            </div>
            )}

            {
              match.params.check === 'forUpdate'  && ( <Link
                className="btn btn-success"
                to={`/user/updateLecture/${lecture._id}`}
                >
                <span className="">Update</span>
               </Link>)
            }
        </td>
        </tr>
        )

      })
    }
   
  </tbody>
</table>
        </Base>
    )
}



export default GetAllLecture