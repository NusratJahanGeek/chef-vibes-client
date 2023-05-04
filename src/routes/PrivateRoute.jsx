import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return  <Spinner
        className='ms-5 d-flex align-center'
        animation="grow"
        variant="warning"
        style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      />
      
    }
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to="/login" replace></Navigate>
};

export default PrivateRoute;