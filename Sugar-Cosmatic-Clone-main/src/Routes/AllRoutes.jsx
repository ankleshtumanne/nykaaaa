import { Route, Routes,Link } from "react-router-dom"
import Home from "../components/Home"
import Login from "../components/Login"
import Cart from "../components/Cart"
import Products from "../components/Products"
import Signup from "../components/Signup"
import PrivateRoute from "../../PrivateRoute/PrivateRoute"
function AllRoutes(){
    return(
        <>
        <Link to="/"></Link>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cart" element={
            <PrivateRoute>
                 <Cart/>
            </PrivateRoute>
           }/>
            <Route path="/product" element={
            <PrivateRoute>
                 <Products/>
            </PrivateRoute>
           }/>
            <Route path="/Signup" element={<Signup/>}/>
        </Routes>
        </>
        
    )
}
export default AllRoutes