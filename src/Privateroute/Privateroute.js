import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Authcontext } from '../context/UserContext';

const Privateroute = ({ children }) => {
    let { users, loading } = useContext(Authcontext)
    if (loading) {
        return <div>
            loading.................
        </div>
    }
    if (users && users.uid) {
        return children
    }

    return <Navigate to='/login'></Navigate>
};

export default Privateroute;