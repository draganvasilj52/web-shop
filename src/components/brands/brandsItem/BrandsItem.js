import imageCat from '../../../assets/download.jpeg'
import './items.css'
const BrandsItem = ({ title, itemContainer, itemImage, itemTitle }) => {
  return (
    <div className={`${itemContainer}`}>
      <div
        style={{ backgroundImage: `url(${imageCat})` }}
        alt="bezzzee"
        className={`${itemImage}`}
      />

      <h3 className={`${itemTitle}`}>{title}</h3>
    </div>
  )
}

export default BrandsItem
