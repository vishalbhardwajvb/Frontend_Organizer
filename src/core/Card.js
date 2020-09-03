import React from "react"
import ImageHelper from "./helper/ImageHelper";
import {Link } from "react-router-dom";


const Card=({
    lectureTitle="lectureTitle",
    lectureDescription="lectureDescription",
    coursecate="Sample",
    path="",
    userId="",
    userName="",
    redirectPath=""
})=>{





    return(

        <div  className="card cardprops mb-5  text-white bg-dark border border-success">

            <div className="card-header"><h3>{userName}</h3></div>
            <div className="card-body">

                <ImageHelper url={path}/>
                <div className="row ">
                    <div className="col-12 mt-5 border border-info text-white rounded"><h5 className="mt-2">{coursecate}</h5></div>
                    <Link to={`/loadAllLecture/${userId}`}  className="btn btn-md btn-success text-lead mt-3 col-md-12 text-white rounded">
                        <span><h4>Enter Course</h4> </span>
                    </Link>
                </div>

            </div>
        </div>

    );
}


export default Card;