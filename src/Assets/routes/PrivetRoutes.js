import React, { useContext } from 'react';

import { AuthContext } from '../contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spin from '../../pages/Shared/Spin';



const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return  <Spin/>
    }

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoutes;