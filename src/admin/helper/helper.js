import { API } from "../../backend"



export const createCategory=(userId,category)=>{
    console.log(category)

    return fetch(`${API}/category/create`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(category)
    }).then(response=>response.json()).catch(err=>console.log("FETCH CREATE CATEGORY ERROR"));

}


export const deleteCategory=(userId,categoryId)=>{


    return fetch(`${API}/category/${userId}/${categoryId}`,{
        method:"DELETE",
        headers:{
            Accept:"application/json",
        }
    }).then(response=>response.json()).catch(err=>console.log("Error in fetch Category Delete"));


}

export const getAllCategory=()=>{
    return fetch(`${API}/getAllCategories`,{
        method:"GET",
        headers:{
            Accept:"application/json"
        }
    }).then(response=>response.json()).catch(err=>console.log("get All Category Fetch Error found "))

}

export const getCategoryById=(userId,categoryId)=>{
    return fetch(`${API}/category/${userId}/${categoryId}`,{
        method:"GET",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        }
    }).then(response=>response.json()).catch(err=>console.log("get Category By ID Fetch Error found"))
}


export const getCategoryByIdAndUpdate=(userId,categoryId,category)=>{

    return fetch(`${API}/category/${userId}/${categoryId}`,{
        method:"PUT",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(category)
    }).then(response=>response.json()).catch(err=>console.log("getCategoryByIdAndUpdate IN FETCH ",err))

}

export const getAllUser=()=>{
    return fetch(`${API}/getAllUser`,{
        method:"GET",
        headers:{
            Accept:"application/json"
        }
    }).then(response=>response.json()).catch(err=>console.log("get All User Fetch ERROR",err));
}

export const deleteUser=(userId)=>{
    return fetch(`${API}/admin/${userId}`,{
        method:"DELETE",
        headers:{
            Accept:"application/json"
        }
    }).then(response=>response.json()).catch(err=>console.log("get All User Fetch ERROR",err));
}