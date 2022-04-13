import HeaderBottom from './headerBottom/HeaderBottom'
import HeaderMiddle from './headerMiddle/HeaderMiddle'
import HeaderTopContainer from './headerTop/HeaderTopContainer'
const HeaderContainer = () => {
  return (
    <div className="flex flex-col container mx-auto my-0">
      <HeaderTopContainer />

      <HeaderMiddle />
      <HeaderBottom />
    </div>
  )
}

export default HeaderContainer
