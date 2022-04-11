import logo from '../../../assets/eBay-logo-square.jpg'

import SearchIcon from '@mui/icons-material/Search';
const HeaderMiddle = () => {
  return (
    <div className="flex justify-center">
      <img className="w-28 h-12 object-cover" src={logo} alt="" />

      <div  className="relative border-2 border-solid border-black border-r border-r-gray-300">
        <SearchIcon className="absolute top-1/2 px-2"  />
        <input className='pl-6' type="text" placeholder="Search..." />
       
      </div>
    </div>
  )
}

export default HeaderMiddle
/* <div class="searchbar-wrapper">
<i class="fa fa-search searchbar-i" aria-hidden="true"></i>
<input class="searchbar-input" type="search" placeholder="Search...">
</div>

.searchbar-wrapper{
position:relative;
}

.searchbar-i{
position:absolute;
top: 50%;
transform: translateY(-50%);
padding: 0 .5rem;
}

.searchbar-input{
padding-left: 2rem;
} */