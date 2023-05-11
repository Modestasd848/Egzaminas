import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import UsersInfo from './components/organism/UsersInfo/UserInfo';
import AdministratorLogin from './components/organism/AdministratorLogin/AdministratorLogin';
import { RequireAuth } from './Auth/RequireAuth';
import { AuthProvider } from './Auth/Auth';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<AdministratorLogin />} />
        <Route
          path="/users"
          element={
            <RequireAuth>
              <UsersInfo />
            </RequireAuth>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
