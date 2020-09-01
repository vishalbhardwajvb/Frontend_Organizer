import React from "react"


const ImageHelper=({url})=>
{

    return(

        <div  className="rounded border border-info">
            <img
            src={url}
            alt="photo1"
            style={{width:"280px",height:"300px"}}
            className="rounded card-img"
            />
        </div>

    );

}


export default ImageHelper