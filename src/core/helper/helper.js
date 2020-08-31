import { API } from "../../backend";



export const getHomeData=()=>{
    return fetch(`${API}/getHomeData`,{
        method:"GET",
        headers:{
            Accept:"application/json",
            "Content-type":"application/json"
        }
    }).then(response=>response.json()).catch(err=>console.log("load Home data Fetch error"));
}



export const loadLectureofUser=(userId)=>{
    return fetch(`${API}/loadLectureofUser/${userId}`,{
        method:"GET",
        headers:{
            Accept:"application/json"
        }
    }).then(response=>response.json()).catch(err=>console.log("error in loadlecture of user fetch",err));
}