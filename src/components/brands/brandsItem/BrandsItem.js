import imageCat from '../../../assets/download.jpeg'
import './items.css'
const BrandsItem = ({ title }) => {
  return (
    <div className="flex items-center flex-col hover:underline pad ">
      <div
        style={{ backgroundImage: `url(${imageCat})` }}
        alt="bezzzee"
        className="max-w-full w-32 h-32 hover:border-gray-900 border border-solid border-transparent imgRad bg-center bg-cover bg-clip-padding"
      />

      <h3 className="text-center mt-2.5 font-bold text-base ">{title}</h3>
    </div>
  )
}

export default BrandsItem
