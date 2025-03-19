import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRouter = ({children}) => {
    const {loading,user} = useContext(AuthContext)
    const location = useLocation()
    console.log(location);
    

    if (loading) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    if (user?.email) {
        return children
    }
    
    return <Navigate state={location.pathname} to='/logIn'></Navigate>
};

export default PrivateRouter;

PrivateRouter.propTypes = {
    children: PropTypes.node
}