import React ,{useState} from "react"
import Base from "../core/Base"

import {signin,isAuthenticated,authenticate} from "../auth/helper/helper"
import { Redirect } from "react-router-dom";


const Signin=()=>{
    const [values,setValues]=useState({
        email:"",
        password:"",
        error:"",
        loading:false,
        didRedirect:false
    });
    

    const {email,password,didRedirect,error,loading}=values;
    const {user} =isAuthenticated();

    const handleChange=name=>event=>{
        setValues({...values,error:false,[name]:event.target.value})
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        setValues({...values,error:false,loading:true});
        signin({email,password}).then(data=>{
            console.log('vishal',data)
            if(data.error)
            {
                setValues({...values,loading:false,error:data.error})
            }
            else
            {
               authenticate(data,()=>{
                setValues({...values,loading:false,error:false,didRedirect:true})
               })
            }
        }).catch(err=>console.log("Sign In ERROR",err));
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

      const performRedirect=()=>{

        if(didRedirect)
        {
            if(user && user.role===1)
            {
                return <Redirect to="/admin/dashboard"/>
               
            }
            else{

                return <Redirect to="/user/dashboard"/>

            }

        }
        if(isAuthenticated())
        {
            return <Redirect to="/"/>
        }

      }
    const SiginForm=()=>{
        return(
            <>
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
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

                        <button onClick={onSubmit} className="btn btn-success btn-block">Submit</button>
                    </form>
                </div>
            </div>
            </>
        );
    }



    return(
        <Base title="Sign In" description="We are Waiting for your Signing in">
            {loadingMessage()}
            {errorMessage()}
            {SiginForm()}
            {performRedirect()}
        </Base>
    );
}

export default Signin
