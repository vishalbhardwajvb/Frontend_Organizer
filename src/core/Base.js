import React, { useState } from "react"
import Menu from "../core/Menu"


const Base=({
    title="My title",
    description="My Description",
    className="bg-dark text-white p-4",
    children

})=>{

  const [contactus,setContactus]=useState(false); 


  const onclick1=()=>{
    setContactus(true)
  }

  const HideMailBox=()=>
  {
    setContactus(false)

  }

  const contactUs=()=>{

    return(
      
        contactus && (
          <>
            
   
            <div className="alert alert-success col-sm-6 offset-sm-3">
              <u><h2>Mail Your Query To</h2></u>
              <h3 style={{display:"inline-block"}}>Vishalbhardwaj@gmail.com</h3>
              <button onClick={HideMailBox} className="btn btn-danger mail-btn">Done</button>
            </div>
          </>

        )
      
    )
  
  
  }



  return(
  
    <div>
    <Menu />
    <div className="container-fluid">
      <div className="jumbotron bg-dark text-white text-center">
        <h2 className="display-4 mt-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
    {contactUs()}

    <footer className="footer footer1 bg-dark mt-auto  py-3">
      <div className="container-fluid bg-success text-white text-center py-3">
        <h4>Copyright © Vishal Bhardwaj</h4>
        <button onClick={onclick1} className="btn btn-warning btn-lg">Contact Us</button>
      </div>
    </footer>
  </div>
  );
}


export default Base;