import {API} from "../../backend"

export const createLecture=(lecture,userId)=>{

    return fetch(`${API}/lecture/${userId}/create`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(lecture)
    }).then(response=>response.json()).catch(err=>console.log("Lecture Create   F-Error".err));

}


export const getAllLectures=(userId)=>{

    return fetch(`${API}/getAllLecture/${userId}`,{
        method:"GET",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        }
    }).then(response=>response.json()).catch(err=>console.log("GET ALL GATEGORY FETCH ERROR"))
}


export const updateLectureById=(userId,lectureId,lecture)=>{
    return fetch(`${API}/lecture/${userId}/${lectureId}`,{
        method:"PUT",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(lecture)
    }).then(response=>response.json()).catch(err=>console.log("updateLectureById Fetch ERROR",err));
}


export const getPreloadLecture=(userId,lectureId)=>{
    return fetch(`${API}/lecture/${userId}/${lectureId}`,{
        method:"GET",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        }
    }).then(response=>response.json()).catch(err=>console.log("GET Lecture By ID FETCH ERROR"))

} 

export const deleteLecture = (userId,lectureId) => {
    return fetch(`${API}/lecture/${userId}/${lectureId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };




  export const getAllCategories=()=>{

    return fetch(`${API}/getAllCategories`,{
        method:"GET",
        headers:{
            Accept:"application/json"
        }
    }).then(response=>response.json()).catch(err=>console.log("Get All categories error Found"))

  }