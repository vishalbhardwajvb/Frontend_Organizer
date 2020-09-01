import React from "react"


const ImageHelper=({url})=>
{

    return(

        <div style={{width:"280px",height:"280px"}} className="rounded border border-info">
            <img
            src={url}
            alt="photo1"
            style={{maxHeight:"100%",maxWidth:"100%"}}
            className="mb-3 rounded"
            />
        </div>

    );

}


export default ImageHelper