import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useState } from 'react'
const Dropdown = ({ title, spanProp, containerProp, categories }) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <div
      className={`relative ${containerProp}`}
      onClick={() => setIsActive(!isActive)}
    >
      <div className="flex items-center">
        <span className={`${spanProp}`}>{title}</span> <KeyboardArrowDownIcon />
      </div>
      {isActive && (
        <div className="flex flex-wrap w-96 absolute top-full  z-10 bg-white border-2 border-solid border-slate-200">
          {categories.map((item, index) => (
            <div className="h-auto w-1/3" key={index}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
//https://tobiasahlin.com/blog/common-flexbox-patterns/
