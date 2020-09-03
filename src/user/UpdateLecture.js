import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { updateLectureById } from "./helper/lecture";
import { isAuthenticated } from "../auth/helper/helper";
import {getPreloadLecture} from "./helper/lecture"


const UpdateLecture = ({match}) => {
  
const [values,setValues]=useState({
    day:"",
    url:"",
    description:"",
    loading:false,
    error:false,
    success:false,
    time:""
})

const {user}=isAuthenticated()

const {day,url,description,loading,error,success,time}=values;

  const onSubmit = event => {

      event.preventDefault();
      setValues({...values,loading:true,error:false});
  

      updateLectureById(user._id,match.params.lectureId,{day,description,url,time}).then(data=>{
          if(data.error)
          {
              setValues({...values,error:data.error,loading:false,success:false})

          }
          else{
              
            setValues({...values,day:"",description:"",url:"",time:"",loading:false,error:false,success:true})
            setValues({...values,
              day:data.updated_Lecture.day,
              description:data.updated_Lecture.description,
              time:data.updated_Lecture.time,
              url:data.updated_Lecture.url,
              loading:false,
              error:false,
              success:true,
            })

          }
      }).catch(err=>console.log("updateLectureById Error",err))
   
  };

  const preload=()=>{
    setValues({...values,loading:true,error:false,success:false})

    getPreloadLecture(user._id,match.params.lectureId).then(data=>{
      if(data.error)
      {
          setValues({...values,error:data.error,success:false,loading:false})
      }
      else{
        setValues({...values,
          day:data.lecture.day,
          url:data.lecture.url,
          description:data.lecture.description,
          time:data.lecture.time,
          success:false,
          loading:false})

      }
    }).catch(err=>console.log("preload DATA ERROR",err))

  }

  useEffect(()=>{
    preload()
  },[])

  const handleChange = name => event => {
      setValues({...values,error:false,[name]:event.target.value})
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
    );
  };


  const errorMessage = () => {
    return (
     <div className="row">
         <div className="col-sm-12 text-left">
             <div
             className="alert alert-danger"
             style={{display:error?"":"none"}}
             >
                {error}
             </div>
         </div>

     </div>
    );
  };

  const successMessage = () => {
    return (
     <div className="row">
         <div className="col-sm-12 text-left">
             <div
             className="alert alert-success"
             style={{display:success?"":"none"}}
             >
                Lecture Successfully Saved
             </div>
         </div>

     </div>
    );
  };

  const UpdateLectureForm = () => (


    <form>
  
      <div className="form-group">
      <label className="text-light">Day</label>

        <input
          onChange={handleChange("day")}
          name="day"
          className="form-control"
          placeholder="Day 1"
          value={day}
        
        />
      </div>
      <div className="form-group">
      <label className="text-light">Topic</label>
        <textarea
          onChange={handleChange("description")}
          name="description"
          className="form-control"
          placeholder="Introduction to c++"
          value={description}
         
        />
      </div>


      <div className="form-group">
      <label className="text-light">Timing of Lecture</label>

        <textarea
          onChange={handleChange("time")}
          name="time"
          className="form-control"
          placeholder="Ex:- 9-10 am"
          value={time}
         
        />
      </div>


      <div className="form-group">
      <label className="text-light">Url</label>
        <textarea
          onChange={handleChange("url")}
          name="url"
          className="form-control"
          placeholder="http://googlemeet/1oxadsve45a"
          value={url}
      
        />
      </div>



      <button
        type="submit"
        onClick={onSubmit}
        className="btn btn-outline-success mb-3"
      >
        Update Lecture
      </button>
    </form>
  );

  return (
    <Base
      title="Update Your Lecture here!"
      description="Welcome to Updation section"
      className="container bg-info p-4"
      
    >
     <div className="row"> <Link to="/user/dashboard" className="btn btn-md btn-dark mb-3 offset-1 col-md-3">
       Go to DashBoard
      </Link>
      <Link to="/user/getAllLecture/forUpdate" className="btn btn-md btn-dark mb-3 offset-3 col-md-3">
       Back to Update Page
      </Link></div>
      <div className="row bg-dark text-white rounded">
        <div className="col-md-8 offset-md-2">
            {loadingMessage()}
            {successMessage()}
            {errorMessage()}
          {UpdateLectureForm()}
        </div>
      </div>
    </Base>
  );
};

export default UpdateLecture;
