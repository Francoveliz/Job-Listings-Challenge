import React,{createContext,useState} from 'react'
import Data from "../data.json"

export const JobListContext = createContext();

export const JobListProvider = props => {
 let [jobs, setJobs] = useState([...Data])
 let [filterContext, setFilterContext] = useState([])

 const restartList = () => {
  setFilterContext([])
 }

 const filterList = () => {
  let newJobsArr = [...Data]
  filterContext.map(ele => {
  newJobsArr = newJobsArr.filter(filtro => filtro[ele.property] === ele.value || filtro[ele.property].includes(ele.value)) 
  })
  setJobs(newJobsArr)
 }

 const removeFilter = (property,valueToRemove) => {
  let jobsAfterRemove = [...filterContext]
  jobsAfterRemove = jobsAfterRemove.filter(el => el.value !== valueToRemove)
  setFilterContext(jobsAfterRemove)

 }

 return (
  <JobListContext.Provider
   value={{
    jobs,
    setJobs,
    restartList,
    filterList,
    filterContext,
    setFilterContext,
    removeFilter
   }} >
   {props.children}
  </JobListContext.Provider>
 )
}


