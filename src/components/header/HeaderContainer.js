import HeaderBottom from './headerBottom/HeaderBottom'
import HeaderMiddle from './headerMiddle/HeaderMiddle'
import HeaderTopContainer from './headerTop/HeaderTopContainer'
const HeaderContainer = () => {
  return (
    <div className="flex flex-col">
      <div className="px-8 border-b border-solid border-neutral-200">
        <HeaderTopContainer />
      </div>

      <HeaderMiddle />
      <HeaderBottom />
    </div>
  )
}

export default HeaderContainer
