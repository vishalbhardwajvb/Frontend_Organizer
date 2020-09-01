import React from "react"
import ImageHelper from "./helper/ImageHelper";
import {Link } from "react-router-dom";


const Card=({
    lectureTitle="lectureTitle",
    lectureDescription="lectureDescription",
    coursecate="Sample",
    path="https://image.freepik.com/free-vector/coming-soon-typography-style-vector_53876-56733.jpg",
    userId="",
    userName="",
    redirectPath=""
})=>{





    return(

        <div  className="card cardprops  text-white bg-dark border border-success">

            <div className="card-header"><h3>{userName}</h3></div>
            <div className="card-body">

                <ImageHelper url={path}/>
                <div className="row ">
                    <div className="col-12 mt-5 border border-info text-white rounded"><h5 className="mt-2">{coursecate}</h5></div>
                    <Link to={`/loadAllLecture/${userId}`}  className="col-12 text-lead mt-3 bg-success text-white rounded">
                    
                        <span><h4>Enter Course</h4> </span>
                    </Link>
                </div>

            </div>
        </div>

    );
}


export default Card;