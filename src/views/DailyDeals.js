import { useSelector } from 'react-redux'
import CardDeal from './../components/common/CardDeal'
const DailyDeals = () => {
  const deals = useSelector((state) => state.starter.deals)

  return (
    <div className="px-12">
      <p className="text-2xl font-bold my-4	">Deals</p>
      <div className="flex flex-col border border-solid border-gray-600">
        <p className="border-b border-solid border-gray-600 mx-6 text-center py-2.5 text-xl">
          SPOTLIGHT DEAL
        </p>
        <div className="flex">
          {deals.map(
            (item, index) =>
              index === 0 && <CardDeal key={index} deal={item} spotlight />
          )}
        </div>
      </div>

      <div className="border border-solid border-gray-600 p-1.5 mb-4 mt-4 text-xl text-center">
        FEATURED DEALS
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        {deals.map(
          (item, index) => index > 0 && <CardDeal key={index} deal={item} />
        )}
      </div>
    </div>
  )
}

export default DailyDeals
