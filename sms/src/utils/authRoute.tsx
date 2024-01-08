import React from 'react'; 
import {Route, redirect, RouteProps, Navigate} from 'react-router-dom'; 

interface ProtectedRouteProps extends RouteProps {
    isAuthenticated: boolean; 
    allowedRoles?: string[];
    userRole?: string; 
    redirectTo?: string;
    children: React.ReactNode;
}

const authRoute: React.FC<ProtectedRouteProps> = ({
    isAuthenticated, 
    allowedRoles = [], 
    userRole,
    redirectTo = '/login',
    children,
    ...rest
}) => {
    const isAuthorized = isAuthenticated && allowedRoles.includes(userRole || '');

    return (
        <Route
            {...rest}
            element={isAuthorized ? children : <Navigate to={redirectTo} />}
        />
    )
}

export default authRoute;
