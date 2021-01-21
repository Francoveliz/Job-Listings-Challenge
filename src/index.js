import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';
import { JobListProvider } from "./context/job-list-context"


ReactDOM.render(
  <React.StrictMode>
     <JobListProvider>
      <App />
      </JobListProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
