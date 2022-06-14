import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PostContextProvider from './context/homeFeelings/PostContextProvider';
import DarkModeContextProvider from './context/darkmode/DarkModeContextProvider';
import LoginContextProvider from './context/login/LoginContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <LoginContextProvider>
      <DarkModeContextProvider>
        <PostContextProvider>
          <App />
        </PostContextProvider>
      </DarkModeContextProvider>
    </LoginContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


