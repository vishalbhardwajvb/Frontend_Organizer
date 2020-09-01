import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { createLecture,getAllCategories } from "./helper/lecture";
import { isAuthenticated } from "../auth/helper/helper";



const CreateLecture = () => {



  const [lecture,setLecture]=useState({
    day:"",
    description:"",
    url:"",
    userId:"",
    loading:false,
    success:false,
    error:"",
    time:""
    

  })

  const [fillInputMessage,setFillInputMessage]=useState(false);
  
  const {day,description,url,loading,success,error,userId,time}=lecture;
  const {user}=isAuthenticated()

  const onSubmit = event => {
    event.preventDefault();
    setLecture({...lecture,loading:true,userId:user._id,success:false});
    if(day && url && description)
    {
      createLecture({day,description,url,userId,time},user._id).then(data=>{
        if(data.error)
        {
          setLecture({...lecture,error:data.error,loading:false,success:false})
          setFillInputMessage(false)
        }
        else
        {
          setLecture({...lecture,day:"",url:"",description:"",time:"",success:true,loading:false,error:false})
          setFillInputMessage(false)
  
        }
      }).catch(err=>console.log("Create Lecture error Dekhlo",err));

    }
    else{
      setLecture({...lecture,day:"",url:"",description:"",success:false,loading:false,error:false})
      setFillInputMessage(true)
      fillAllMessage()
      
    }
    

   
  };






  const handleChange = name => event => {

    setLecture({...lecture,[name]:event.target.value,userId:user._id});
   
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
         <div className="col-md-12 text-left">
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
         <div className="col-md-12 text-left">
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


  const fillAllMessage = () => {
    return (

      fillInputMessage && (
        <div className="row">
         <div className="col-md-12  text-left">
             <div
             className="alert alert-danger"
             >
               Please Fill All The inputs Properly
             </div>
         </div>

     </div>
      )
     
    );
  };


  const CreateLectureForm = () => (

    <form>
      <div className="form-group">
      <label className="text-light">Day</label>
        <input
          onChange={handleChange("day")}
          name="day"
          className="form-control"
          placeholder="Ex-: 1"
          value={day}
          autocomplete="off"
        
        />
      </div>
      <div className="form-group">
      <label className="text-light">Topic Name</label>

        <textarea
          onChange={handleChange("description")}
          name="description"
          className="form-control"
          placeholder="Ex:- Introduction to c++"
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
      <label className="text-light">Url of Video</label>
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
        Create Lecture
      </button>
    </form>
  );

  return (
    <Base
      title="Add a New Lecture here!"
      description="Welcome to Create Lecture section"
      className="container bg-info p-4"
    >
      <Link to="/user/dashboard" className="btn btn-md btn-dark mb-3">
        Back To Dashboard
      </Link>
      <div className="row bg-dark text-white rounded">
        <div className="col-md-8 offset-md-2">
          {successMessage()}
          {errorMessage()}
          {loadingMessage()}
          {fillAllMessage()}
          {CreateLectureForm()}
        </div>
      </div>
    </Base>
  );
};

export default CreateLecture;
