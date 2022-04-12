import FavoriteIcon from '@mui/icons-material/Favorite'

const HeaderBottom = () => {
  return (
    <div>
      <ul className="text-xs flex ">
        <li className="py-2 px-3 ">
          <span className="border-b-2 border-solid border-black pb-1.5">
            Home
          </span>
        </li>
        <li className="py-2 px-3 flex items-center ">
          <FavoriteIcon sx={{ fontSize: 11 }} />
          <span className="ml-0.5">Saved</span>
        </li>
      </ul>
    </div>
  )
}

export default HeaderBottom
