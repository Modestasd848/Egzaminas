import React from 'react';
import { login } from '../api-calls/Administrator/Administrator';

const AuthContext = React.createContext(null);

export function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = React.useState(false);

  const signIn = async (user, callback) => {
    const response = await login(user);

    if (response.status === 200) {
      setLoggedIn(true);
      callback();
    }
  };

  const signOut = (callback) => {
    setLoggedIn(false);
    callback();
  };

  let value = { loggedIn, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return React.useContext(AuthContext);
}
