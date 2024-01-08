import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login';
import Student from './pages/student';
import teacher from './pages/teacher'; 
import authRoute from './utils/authRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [userRole, setUserRole] = useState('');

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated} setUserRole={setUserRole} />} />

        /* authRoute for only student role users */
        <Route 
          path='/student'
          element={<authRoute isAuthenticated={isAuthenticated} allowedRole={['student']} userRole={userRole}}
        /> 



      </Routes>
    </Router>
  )
}

export default App
