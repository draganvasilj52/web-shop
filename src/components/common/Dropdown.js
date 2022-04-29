import { useRef } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useState } from 'react'
import { useOutsideClick } from 'rooks'
const Dropdown = ({
  title,
  spanProp,
  containerProp,
  categories,
  categoriesContainerProp,
  categoriesItemProp,
  iconSize,
  contentProp,
  itemHoverProp,
}) => {
  const [isActive, setIsActive] = useState(false)
  const ref = useRef()

  useOutsideClick(
    ref,
    !itemHoverProp
      ? () => {
          setIsActive(false)
        }
      : () => {}
  )

  return (
    <div
      className={`relative  ${containerProp}`}
      onClick={() => setIsActive(!isActive)}
      onMouseLeave={() => {
        itemHoverProp && setIsActive(false)
      }}
    >
      <div
        ref={ref}
        className={`flex items-center hover:cursor-pointer ${contentProp}`}
      >
        <span className={`${spanProp}`}>{title}</span>{' '}
        <KeyboardArrowDownIcon sx={{ fontSize: iconSize }} />
      </div>
      {isActive && (
        <div className={`${categoriesContainerProp} absolute `}>
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
