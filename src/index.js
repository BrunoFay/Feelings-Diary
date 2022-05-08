import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PostContextProvider from './context/PostContextProvider';
import DarkModeContextProvider from './context/DarkModeContextProvider';
import LoginContextProvider from './context/LoginContextProvider';

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


