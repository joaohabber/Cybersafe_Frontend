import React, { createContext, ReactNode } from 'react';

// Define types for the context and its initial state
interface AuthContextProps {
  login: (email: string, password: string) => void;
  userToken: string | null;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode; // ReactNode is a type that represents a React node (e.g., JSX elements)
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userToken, setUserToken] = React.useState<string | null>(null);

  console.log(`userToken in auth context: ${userToken}`);
  const login = (email: string, password: string) => {
    console.log(`login: ${email}, ${password}`);
    console.log(`Login success`);
    setUserToken('asdf');
  };

  const contextValue: AuthContextProps = {
    login,
    userToken,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
