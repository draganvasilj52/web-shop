import imageCat from '../../../assets/download.jpeg'
import './items.css'
const BrandsItem = ({ title }) => {
  return (
    <div className="flex items-center flex-col hover:underline pad ">
      <div className="w-32 h-32 imgRad  ">
        <img
          className="w-full h-full hover:border-gray-900 border border-solid border-transparent imgRad bg-center bg-cover bg-clip-padding"
          style={{ backgroundImage: `url(${imageCat})` }}
          alt="bezzzee"
        />
      </div>

      <h3 className="text-center mt-2.5 font-bold text-base">{title}</h3>
    </div>
  )
}

export default BrandsItem
