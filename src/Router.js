import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home"
import Signin from "./user/Signin"
import Signup from "./user/Signup";
import UserDashBoard from "./user/UserDashboard";
import AdminDashboard from "./user/AdminDashboard";
import CreateLecture from "./user/CreateLecture";
import GetAllLecture from "./user/GetAllLecture";
import UpdateLecture from "./user/UpdateLecture";
import LoadAllLecture from "./core/LoadAllLecture";
import AddCategory from "./admin/AddCategory";
import ManageCategory from "./admin/ManageCategory"
import UpdateCategory from "./admin/UpdateCategory"
import ManageUser from "./admin/ManageUser"



const Router = () => {
  return (
    <BrowserRouter>
      <Switch>

        {/* Normal User Routes */}
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/user/dashboard" exact component={UserDashBoard} />
        <Route path="/user/createLecture" exact component={CreateLecture} />
        <Route path="/user/getAllLecture/:check" exact component={GetAllLecture} />
        <Route path="/user/updateLecture/:lectureId" exact component={UpdateLecture} />
        <Route path="/loadAllLecture/:userId" exact component={LoadAllLecture} />



        {/* Admin Routes */}

        <Route path="/admin/dashboard" exact component={AdminDashboard} />
        <Route path="/admin/createCategory" exact component={AddCategory} />
        <Route path="/admin/getAllCategory" exact component={ManageCategory} />
        <Route path="/admin/updateCategory/:categoryId" exact component={UpdateCategory} />

        <Route path="/admin/manageUser" exact component={ManageUser}/> 

        
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
