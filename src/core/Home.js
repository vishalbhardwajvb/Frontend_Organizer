import React,{useState,useEffect}  from "react";
import Base from "./Base";
import Card from "./Card"
import {getHomeData } from "./helper/helper";
export default function Home() {


  const [values,setValues]=useState([]);
  const [loading,setLoading]=useState(false);



  const preload=()=>{
    getHomeData().then(data=>{
      if(data.error)
      {
          console.log("DATA ERROR ",data.error)
          setLoading(false)
      }
      else
      {
        setLoading(false)
        setValues(data);
      }
    }).catch(err=>console.log("Load DATA EROR"));
  }


  const loadingMessage = () => {
    return (
      loading && (
          <div className="row">
               <div className=" col-md-6 offset-sm-3 alert alert-info">
          <h2>Loading...</h2>
        </div>
          </div>
       
      )
    );
  };

  useEffect(() => {
    setLoading(true)
    preload()
   
  }, [])


  return (
    <Base title="Home Page" description="Welcome to Record Organizer">
      {loadingMessage()}
      <div className="row text-center">
        <div className="container-fluid">
         <div className="row">
           {
             
             values.map((element)=>{
               
            
              return  <Card key={element._id}  userName={element.name} userId={element._id}  path="https://image.freepik.com/free-vector/coming-soon-typography-style-vector_53876-56733.jpg"  coursecode={element.coursecode}/>
         
             })
           }


           



        
         </div>
        </div>
      </div>
    </Base>
   
  );
}