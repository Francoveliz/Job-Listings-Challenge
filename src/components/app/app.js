import React,{useContext} from 'react'
import './app.css';
import JobsList from "../job-list/job-list"
import Header from "../header/Header"
import FilterContainer from "../filter-container/filter-container"
import { JobListContext } from "../../context/job-list-context"



const App = () => {
  let {filterContext} = useContext(JobListContext)

  return (
      <div className="app">
        <Header />
        { filterContext.length > 0 ? <FilterContainer /> : ""}
        <JobsList />
      </div>
  );
}

export default App;
