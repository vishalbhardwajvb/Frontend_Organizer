import React,{useState,useEffect} from "react"
import Base from "../core/Base"
import { isAuthenticated } from "../auth/helper/helper"
import {getAllLectures} from  "./helper/lecture"
import { Link } from "react-router-dom"

import {deleteLecture} from "./helper/lecture"

const GetAllLecture=({
   match
})=>{
    const[loading,setLoading]=useState(false);

    const [lectures,setLectures]=useState([]);

    const {user}=isAuthenticated()

    const getAllLecture=()=>{
      setLoading(true)

        getAllLectures(user._id).then(data=>{
            if(data.error)
            {
                setLoading(false)
                console.log("GET ALL LECTURE DATA.ERROR found")
            }
            else
            {
              setLoading(false);
                setLectures(data.lecture);
            }
        }).catch(err=>console.log("Not GET ALL LECTURE Fetch Internal func ERROR "))
        
    }

    const deleteThisLecture = (lectureId) => {
        setLoading(true)
        deleteLecture(user._id,lectureId).then(data => {
          if (data.error) {
            console.log(data.error);
            setLoading(false)
          } else {
            getAllLecture();
            setLoading(false)
          }
        });
      };

    useEffect(()=>{
        getAllLecture();
    },[])

    const loadingMessage = () => {
      return (
        loading && (
         <div className="row">
            <div className="alert alert-info offset-3 col-md-6">
            <h2>Loading...</h2>
          </div>

         </div>
        )
      );
    };



    return(
        <Base title="Your All Lecture" description="Here you can update your Records ">
          {loadingMessage()}
          <Link to="/user/dashboard" className="btn btn-md btn-info mb-3">
        Back To DashBoard
      </Link>
                <h4 className="card-header text-success  table_heading">Lectures Infomation</h4>

<table class="table  border border-info table-striped table-dark lecture">
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
          <tr className="mt-4">
          <th className="text-center" scope="row">{lecture.day}</th>
          <td className="text-center" >{lecture.time}</td>
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