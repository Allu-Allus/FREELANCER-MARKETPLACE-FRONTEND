import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"

//register API
export const registerAPI = async(reqBody)=>{
    return commonAPI("POST",`${serverURL}/register`,reqBody)
}

//login API
export const loginAPI = async(reqBody)=>{
    return commonAPI("POST",`${serverURL}/login`,reqBody)
}

// -----------------------client-------------------------

// add project
export const addProjectAPI = async(reqBody,reqHeader)=>{
    return commonAPI("POST",`${serverURL}/add-project`,reqBody,reqHeader)
}

//api to get find projects
export const getFindProjectsAPI = async()=>{
    return commonAPI("GET",`${serverURL}/find-projects`)
}

//api to delete projects
export const deleteProjectAPI = async(id)=>{
    return commonAPI("DELETE",`${serverURL}/delete-prpject/${id}`)
}

//api to update projects
export const updateProjectAPI = async(id,reqBody,reqHeader)=>{
    return commonAPI("PUT",`${serverURL}/update-project/${id}`,reqBody,reqHeader)
}

// -----------------------client-------------------------
// freelancer apply for project
export const applyProjectAPI = async (reqBody, reqHeader) => {
    return commonAPI("POST", `${serverURL}/apply-project`, reqBody, reqHeader)
}
