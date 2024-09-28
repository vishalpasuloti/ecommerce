import { Route, Routes } from "react-router-dom";
import Register from "./components/registration/register/register";
import Login from "./components/registration/login/login";

export default function AppRouter(){
    return(
        <div>
            <Routes>
                <Route path="" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
           <Route path="/login" element={<Login></Login>}></Route>
            </Routes>
        </div>
    )
}