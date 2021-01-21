import React,{useContext} from 'react'
import "./filter-container.css"
import FilterTag from "./components/filter-tag/filter-tag"
import {JobListContext} from "../../context/job-list-context"

const FilterContainer = () => {
  let {filterContext,removeFilter,restartList} = useContext(JobListContext)
  return (
    <div className="filter-container">
      <div className="display-flex flex-wrap">
     {filterContext.map(el => (
        <FilterTag text={el.value} removeFilter={removeFilter} property={el.property} />
      ))}
       </div>
       <button className="btn-clear" onClick={restartList}>Clear</button>
    </div>
 )
}

export default FilterContainer
