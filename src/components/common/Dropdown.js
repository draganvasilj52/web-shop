import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useState } from 'react'
const Dropdown = ({
  title,
  spanProp,
  containerProp,
  categories,
  categoriesContainerProp,
  categoriesItemProp,
}) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <div
      className={`relative  ${containerProp}`}
      onClick={() => setIsActive(!isActive)}
    >
      <div className="flex items-center">
        <span className={`${spanProp}`}>{title}</span> <KeyboardArrowDownIcon />
      </div>
      {isActive && (
        <div className={`${categoriesContainerProp}`}>
          {categories.map((item, index) => (
            <div className={` ${categoriesItemProp}`} key={index}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
