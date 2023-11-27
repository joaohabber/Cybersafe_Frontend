import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { AuthProvider } from './contexts/AuthContext';

const RootComponent = () => {
  return (
    <AuthProvider>
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </AuthProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<RootComponent />);
