import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import UsersInfo from './components/molecules/UsersInfo/UserInfo';
import AdministratorLogin from './components/organism/AdministratorLogin/AdministratorLogin';
import { RequireAuth } from './components/organism//Auth/RequireAuth';
import { AuthProvider } from './components/organism/Auth/Auth';

function App() {
  return (
    <AuthProvider>
      <div>
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
      </div>
    </AuthProvider>
  );
}

export default App;
