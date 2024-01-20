import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext);
    
    const location = useLocation();

    if(user){
        return children;
    }

    if(loading){
        return <Spinner animation="border" variant="primary" />
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;