import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/store";

export const Authorization = ({children})=>{
    const token = localStorage.getItem('token');
    if(!token){
        return <Navigate to={'/'} replace = {true}></Navigate>
    }
    return children;
}

export const protectRoute = ({childern})=>{
    const username = useAuthStore.getState().auth.username;
    if(!username){
        return <Navigate to={'/'} replace ={true}></Navigate>
    }
    return childern;
}