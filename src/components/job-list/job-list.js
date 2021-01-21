import React,{useContext,useEffect} from 'react'
import Card from "../card/card"
import {JobListContext} from "../../context/job-list-context"

const JobsList = () => {
   let { jobs, filterContext, filterList } = useContext(JobListContext)
   
   useEffect(() => {
      filterList()
   }, [filterContext])
   
 return (
    <div>
   {jobs.map((el,index) =>
    <Card
     id={el.id} 
     logo={el.logo}
     company={el.company}
     newTag={el.new}
     featuredTag={el.featured}
     position={el.position}
     postedAt={el.postedAt}
     contract={el.contract}
     location={el.location}
     role={el.role}
     level={el.level}
     languages={el.languages}
     key={index}
     />)}
   
  </div>
 )
}

export default JobsList
