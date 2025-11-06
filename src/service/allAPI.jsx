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