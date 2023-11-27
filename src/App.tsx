import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import AuthStack from './routes/AuthStack';
import AppStack from './routes/AppStack';

function App() {

  const authContext = useContext(AuthContext);

  console.log(`authContext in App: ${authContext}`);

  const userToken = authContext?.userToken || null;

  console.log(`userToken in App: ${userToken}`);
  console.log(userToken === null);

  return (
      <BrowserRouter>
        {userToken === null ? <AuthStack /> : <AppStack />}
      </BrowserRouter>
  );
}

export default App;
