import logo from '../../../assets/eBay-logo-square.jpg'

const HeaderMiddle = () => {
  return (
    <div className="flex justify-center">
      <img className="w-28 h-12 object-cover" src={logo} alt="" />

      <div className="border-2 border-solid border-black border-r border-r-gray-300">
        <input type="text" />
      </div>
    </div>
  )
}

export default HeaderMiddle
