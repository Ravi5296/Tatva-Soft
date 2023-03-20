import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';

const path = {
  Login: '/login',
  Register: '/register'
};

function PageNavigation() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={path.Login} />} />
      <Route path={path.Login} element={<Login />} />
      <Route path={path.Register} element={<Register />} />
    </Routes>
  );
}

export default PageNavigation;
