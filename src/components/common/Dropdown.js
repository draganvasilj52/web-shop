import { useRef } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useState } from 'react'
import onOutsideClickHook from '../../hooks/OutsideClickHook'
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
  itemCategory,
}) => {
  const [isActive, setIsActive] = useState(false)
  const ref = useRef()

  onOutsideClickHook(
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
        className={`flex items-center hover:cursor-pointer ${contentProp} ${
          itemHoverProp && isActive
            ? 'border border-slate-200 rounded-t-sm'
            : 'border border-solid border-transparent '
        }`}
      >
        <span className={`${spanProp} pt-1`}>{title}</span>{' '}
        <KeyboardArrowDownIcon sx={{ fontSize: iconSize }} />
      </div>
      {isActive && (
        <div className={`${categoriesContainerProp} absolute `}>
          {categories.map((item, index) => (
            <div className={` ${categoriesItemProp}`} key={index}>
              <p
                className={`${
                  itemHoverProp &&
                  'first:hover:underline first:hover:text-blue-600 first:font-bold first:hover:cursor-pointer'
                } ${itemCategory}`}
              >
                {item.categoryName}
              </p>
              {itemHoverProp &&
                item.mostPopularCategories.map((item, index) => (
                  <p
                    className="w-fit pl-2 py-1 text-xs hover:cursor-pointer hover:underline hover:text-blue-600"
                    key={index}
                  >
                    {item}
                  </p>
                ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
