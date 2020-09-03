import React,{useState,useEffect}  from "react";
import Base from "./Base";
import Card from "./Card"
import {getHomeData } from "./helper/helper";
// import { getAllCategories } from "../user/helper/lecture";
export default function Home() {


  // const [categories,setCategories]=useState([])
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

    // getAllCategories().then(data=>{
    //   if(data.error)
    //   {
    //     console.log("get ALL Ctaegories Preload Error Found");
    //   }
    //   else
    //   {
    //     setCategories(data);
    //   }
    // }).catch()
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
               
               
            
              return  <Card key={element._id} coursecate={element.category.category}  path={element.category.url}  userName={element.name} userId={element._id}  coursecode={element.coursecode}/>
         
             })
           }
         </div>
      
        </div>
      </div>
    </Base>
   
  );
}
