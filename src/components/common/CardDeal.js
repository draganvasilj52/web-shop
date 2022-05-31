import './cardDeal.css'
import { Link } from 'react-router-dom'

const CardDeal = ({ deal, spotlight }) => {
  return (
    <div
      className={`flex ${
        spotlight ? '' : 'border border-solid border-gray-600'
      }  p-2.5 `}
    >
      <Link
        to={`${deal.id}`}
        className={`cursor-pointer ${
          spotlight ? 'spotlightDiv' : 'featuredDiv'
        }`}
      >
        <img
          className={` ${spotlight ? 'spotlightImg' : 'featuredImg'}`}
          src={`${deal.dealImage}`}
          alt="deal"
        />
      </Link>

      <div
        className={`flex flex-col pl-7  ${
          spotlight ? 'spotlighttextDiv' : 'featuredtextDiv'
        }`}
      >
        <Link
          to={`${deal.id}`}
          className={`${
            spotlight ? 'text-3xl mt-2' : 'text-base'
          } cursor-pointer hover:underline`}
        >
          {deal.dealName}
        </Link>
        <p className="text-xl font-bold">US ${deal.dealPrice}</p>
      </div>
    </div>
  )
}

export default CardDeal
