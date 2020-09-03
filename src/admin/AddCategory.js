import React, { useState } from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper/helper";
import { Link } from "react-router-dom";
import { createCategory } from "./helper/helper";

const AddCategory = () => {
  const [category, setCategory] = useState("");
  const [url, setCategoryUrl] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { user} = isAuthenticated();

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
  const handleChangeUrl=event=>{
    setError("");
    setCategoryUrl(event.target.value);

  }

  const onSubmit = event => {
    event.preventDefault();
    setError("");
    setSuccess(false);


    // backend request fired
    createCategory(user._id,{category,url}).then(data => {
      if (data.error) {
        setError(true);
      } else {
        setError("");
        setSuccess(true);
        setCategory("");
        setCategoryUrl("");
      }
    });
  };

  const successMessage = () => {
    if (success) {
      return <h4 className="text-success">Category created successfully</h4>;
    }
  };

  const warningMessage = () => {
    if (error) {
      return <h4 className="text-success">Failed to create category</h4>;
    }
  };

  const myCategoryForm = () => (
    <form>
      <div className="form-group">
        <p className="lead">Enter the category</p>
        <input
          type="text"
          className="form-control my-3"
          onChange={handleChange}
          value={category}
          autoFocus
          required
          placeholder="For Ex. Summer"
        />

        <p className="lead">Enter the category Image Url</p>
        <input
          type="text"
          className="form-control my-3"
          onChange={handleChangeUrl}
          value={url}
          required
          placeholder="https://imageammnsxz.jpg"
        />
        <button onClick={onSubmit} className="btn btn-outline-info">
          Create Category
        </button>
      </div>
    </form>
  );

  return (
    <Base
      title="Add New category !"
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

export default AddCategory;
