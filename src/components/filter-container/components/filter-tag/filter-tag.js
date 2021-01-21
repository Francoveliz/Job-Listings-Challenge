import React from 'react'
import "./filter-tag.css"
import iconRemove from "../../../../assets/images/icon-remove.svg"


const FilterTag = ({ text, removeFilter, property }) => {

 return (
  <div className="filter-tag">
   <p>{text}</p>
   <button onClick={() => removeFilter(property, text)}> <img src={iconRemove} alt="remove icon" /></button>
  </div>
 )
}

export default FilterTag
