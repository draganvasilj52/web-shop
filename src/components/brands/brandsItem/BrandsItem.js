
import './items.css'

const BrandsItem = ({ item }) => {
  return (
    <div className="group flex items-center flex-col pad hover:cursor-pointer">
      <div
        className="max-w-full w-32 h-32 imgRad bg-center bg-cover bg-clip-padding border border-solid border-transparent group-hover:border-orange-700"
        style={{ backgroundImage: `url(${item.image})` }}
        alt="bezzzee"
      />

      <h3 className="min-w-full text-center mt-2.5 font-bold text-base group-hover:underline ">
        {item.title}
      </h3>
    </div>
  )
}

export default BrandsItem
