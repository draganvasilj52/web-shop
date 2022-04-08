import HeaderTopLeft from './HeaderTopLeft'
import HeaderTopRight from './HeaderTopRight'

const HeaderTopContainer = () => {
  return (
    <div className="flex justify-between mt-0.5 border-b border-solid border-neutral-200">
      <HeaderTopLeft />
      <HeaderTopRight />
    </div>
  )
}

export default HeaderTopContainer
