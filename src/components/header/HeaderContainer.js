import HeaderMiddle from './headerMiddle/HeaderMiddle'
import HeaderTopContainer from './headerTop/HeaderTopContainer'
import { Outlet } from 'react-router-dom'
const HeaderContainer = () => {
  return (
    <div className="flex flex-col">
      <div className="px-12 border-b border-solid border-neutral-200">
        <HeaderTopContainer />
      </div>

      <HeaderMiddle />
      <Outlet />
    </div>
  )
}

export default HeaderContainer
