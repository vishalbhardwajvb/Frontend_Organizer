import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper/helper";
import { Link } from "react-router-dom";
import { getCategoryById,getCategoryByIdAndUpdate} from "./helper/helper";

const UodateCategory = ({match}) => {
  const [category, setCategory] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { user} = isAuthenticated();


const preload=()=>{
    getCategoryById(user._id,match.params.categoryId).then(data=>{
        if(data.error)
        {
            
            setError(true)
        }
        else{
            setError(false)
            setCategory(data.data.category)

        }
    }).catch(err=>console.log("GET CATGORY BY ID ERROR IN ADMIN PANEL",err));

}


useEffect(()=>{

    preload()

},[])


  const goBack = () => (
    <div className="mt-5">
      <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard">
        Admin DashBoard
      </Link>
    </div>
  );

  const handleChange = event => {
    setError("");
    setCategory(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    setError("");
    setSuccess(false);

    // backend request fired
    getCategoryByIdAndUpdate(user._id,match.params.categoryId,{category}).then(data=>{
        if(data.error)
        {
            setSuccess(false)
            setError(true)
        }
        else{
            setError(false)
            setSuccess(true)

        }
    }).catch(err=>console.log("GET CATGORY BY ID And Update ERROR IN ADMIN PANEL",err));
  };

  const successMessage = () => {
    if (success) {
      return <h4 className="text-success">Category successfully updated</h4>;
    }
  };

  const warningMessage = () => {
    if (error) {
      return <h4 className="text-success">Failed to update category</h4>;
    }
  };

  const myCategoryForm = () => (
    <form>
      <div className="form-group">
        <p className="lead">Update the category</p>
        <input
          type="text"
          className="form-control my-3"
          onChange={handleChange}
          value={category}
          autoFocus
          required
          placeholder="For Ex. Summer"
        />
        <button onClick={onSubmit} className="btn btn-outline-info">
          Update Category
        </button>
      </div>
    </form>
  );

  return (
    <Base
      title="Update category !"
      description="It help us to find the interest of the people Easily "
      className="container bg-success p-4"
    >
      <div className="row bg-white rounded">
        <div className="col-md-8 offset-md-2">
          {successMessage()}
          {warningMessage()}
          {myCategoryForm()}
          {goBack()}
        </div>
      </div>
    </Base>
  );
};

export default UodateCategory;
