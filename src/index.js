import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PostContextProvider from './context/homeFeelings/PostContextProvider';
import DarkModeContextProvider from './context/darkmode/DarkModeContextProvider';
import LoginContextProvider from './context/login/LoginContextProvider';
import ScheduleContextProvider from './context/schedule/ScheduleContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <LoginContextProvider>
      <DarkModeContextProvider>
        <PostContextProvider>
          <ScheduleContextProvider>
          <App />
          </ScheduleContextProvider>
        </PostContextProvider>
      </DarkModeContextProvider>
    </LoginContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


