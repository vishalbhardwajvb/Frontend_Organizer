import React ,{useState,useEffect} from "react"
import Base from "../core/Base"

import {signup} from "../auth/helper/helper"
import { getAllCategories } from "./helper/lecture"



const Signup=()=>{
    const [values,setValues]=useState({
        email:"",
        password:"",
        name:"",
        coursecode:"",
        error:false,
        loading:false,
        success:false,
        category:""
    });

  const [categories,setCategories]=useState([])


    const {email,name,password,error,loading,success,category}=values;


    const handleChange=name=>event=>{
        setValues({...values,error:false,[name]:event.target.value})
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        setValues({...values,error:false,loading:true});
        if(category==="")
        {
          setValues({...values,error:" Please Select valid  Category or if category not found then select 'other'",loading:false,success:false})

        }
      
        if(category!=="")
        {
          signup({name,email,password,category}).then(data=>{
            if(data.error)
            {
                setValues({...values,error:data.error,loading:false,success:false})
            }
            else{

                setValues({
                    ...values,
                    loading:false,
                    name:"",
                    email:"",
                    error:false,
                    password:"",
                    success:true,
                    coursecode:"",
                    category:""
                })

            }
        }).catch(err=>console.log("EROR IN SIGNUP",err))
        }
       
      
    }
    





    const getAllCategoriesHelper=()=>{
        getAllCategories().then(data=>{
          if(data.error)
          {
    
            console.log("DAta .error",data.error)
          }
          else
          {
    
            setCategories(data);
    
          }
        }).catch(err=>console.log("Get All Categorie Error found"));
      }
    
    
    
      useEffect(()=>{
    
        getAllCategoriesHelper()
    
      },[])
    
    const loadingMessage = () => {
        return (
          loading && (
            <div className=" col-md-6 offset-sm-3 alert alert-info">
              <h2>Loading...</h2>
            </div>
          )
        );
      };






      const errorMessage = () => {
        return (
         <div className="row">
             <div className="col-md-6 offset-sm-3 text-left">
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
             <div className="col-md-6 offset-sm-3 text-left">
                 <div
                 className="alert alert-success"
                 style={{display:success?"":"none"}}
                 >
                    SignUP Successfully Please Login To Continue
                 </div>
             </div>

         </div>
        );
      };




    const SigupForm=()=>{
        return(
            <>
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>

                    <div className="form-group">
                            <label className="text-light">Name</label>
                            <input
                            onChange={handleChange("name")}
                            value={name}
                            className="form-control"
                            type="text"/>
                    </div>

                   

                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input
                            onChange={handleChange("email")}
                            value={email}
                            className="form-control"
                            type="email"/>
                        </div>

                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input
                            onChange={handleChange("password")}
                            value={password}
                            className="form-control"
                            type="password"
                            />
                        </div>

                        <div className="form-group">
                        <label className="text-light">Subject</label>

        <select
          onChange={handleChange("category")}
          className="form-control"
          placeholder="category"
          name="category"
        >
          <option value="select">Select</option>
          {
            categories.map((category,key)=>{

              return (
              <option key={key} value={category._id}>{category.category}</option>
              )

            })
          }

        </select>
      </div>

                        <button onClick={onSubmit} className="btn btn-success btn-block">Submit</button>
                    </form>
                </div>
            </div>
            </>
        );
    }



    return(
        <Base title="Sign UP" description="We are Waiting for your Signing UP">
            {loadingMessage()}
            {successMessage()}
            {errorMessage()}
            {SigupForm()}
        </Base>
    );
}

export default Signup
