import React, { useContext } from 'react'
import "./card.css"
import { JobListContext } from "../../context/job-list-context"


const Card = ({ logo, company, newTag, featuredTag, position, postedAt, contract, location, role, level, languages }) => {
  let { filterContext, setFilterContext } = useContext(JobListContext)

  let addToFilter = (propertyToPass, valueToPass) => {
    if (!filterContext.some(element => element.value == valueToPass)) {
      //property = key of the data object
      //value = value of the data object
      setFilterContext(prevFilters => [...prevFilters, { property: propertyToPass, value: valueToPass }])
    }

  }

  return (
    <div className={`card ${featuredTag ? "border-featured" : ""}`}>

      <div className="desktop-flex">
        <img className="logo" src={logo} alt="" />
        <div>
          <div className="flex align-items-center">
            <p className="company">{company}</p>
            {newTag ? <p className="new">New!</p> : ""}
            {featuredTag ? <p className="featured">Featured</p> : ""}
          </div>
          <p className="position">{position}</p>
          <div className="detail__group ">
            <p className="datail">{postedAt}</p>
            <p className="datail dot_decoration">{contract}</p>
            <p className="datail">{location}</p>
          </div>
        </div>
      </div>
      <hr className="hr" />
      <div className="tag__group">
        <p className="tag" onClick={() => addToFilter("role", role)}>{role}</p>
        <p className="tag" onClick={() => addToFilter("level", level)}>{level}</p>
        {languages.map((el) => (
          <p className="tag" onClick={() => addToFilter("languages", el)}>{el}</p>
        ))}
      </div>
    </div>

  );
}

export default Card
