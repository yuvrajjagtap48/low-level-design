import {Outlet, Navigate} from "react-router-dom";

const ProtectedRoute = () => {
    const isAuthenticated = true;
    return isAuthenticated ? <Outlet/> : <Navigate to="/login" />   

};

export default ProtectedRoute;


// never put authentication logic with Routing logic, always create a separate component for authentication and use it in the routing logic. This way we can easily manage authentication logic and routing logic separately and also we can reuse the authentication logic in other parts of the application if needed.




