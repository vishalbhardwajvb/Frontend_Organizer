import React, { useState } from "react"
import Base from "./Base"
import { useEffect } from "react"
import { loadLectureofUser } from "./helper/helper"


const LoadAllLecture=({match})=>{


  const [loading,setLoading]=useState(false);

  const [state, setState] = useState([])

    const preload=()=>{
        loadLectureofUser(match.params.userId).then(data=>{
          if(data.error)
          {
              console.log("DATA ERROR");
              setLoading(false);
          }
          else{
            setState(data)
            setLoading(false)

          }
        }).catch(err=>console.log("DATA > EROR IN CONSOLE IN"))

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
        preload();
      
    },[])


    return(
        <Base title="Happy Learning" description="We Wish for Your Better Future">
          {loadingMessage()}

<h4 className="card-header text-success">Lectures Infomation</h4>
           <table class="table  border border-info table-striped table-dark">
             
 

 




    {
      state.length>0 && (
        <thead className="border border-info">
        <tr>
          <th className="text-center" scope="col">Day</th>
          <th className="text-center" scope="col">Time</th>
          <th className="text-center" scope="col">Topic</th>
          <th className="text-center" scope="col">Link</th>
        </tr>
      </thead>
      )
    }
  <tbody>

  

    {
      
      state.map((lecture)=>{
        return(
          <tr>
          <th className="text-center" scope="row">{lecture.day}</th>
        <td className="text-center">{lecture.time}</td>
        <td className="text-center">{lecture.description}</td>
        <td className="text-center"><button onClick={()=>{window.open(lecture.url,"_blank")}} className="btn btn-info">Play Lecture</button></td>
        </tr>
        )


        

      })

      
    }



    

   
  </tbody>

  {
      state.length===0 && (
        <thead className="border border-info">
        <tr>
          <th className="text-center text-danger mt-4 display-4" scope="col">No Data Found in Data Base</th>
          
        </tr>
      </thead>
        
      )
    }
</table>
        </Base>
    );
}

export default LoadAllLecture;