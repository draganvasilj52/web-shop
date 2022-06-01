import { createSlice } from '@reduxjs/toolkit'
import img0 from '../assets/deals/item0.png'
import img1 from '../assets/deals/item1.jpg'
import img2 from '../assets/deals/item2.jpg'
import img3 from '../assets/deals/item3.jpeg'
import img4 from '../assets/deals/item4.jpg'
import img5 from '../assets/deals/item5.jpg'
import img6 from '../assets/deals/item6.jpg'

const initialState = {
  categories: [
    {
      categoryName: 'Electronics',
      mostPopularCategories: [
        'Cell phones and accessories',
        'Video Games and consoles',
        'Computers and tablets',
        'Cameras and photos',
      ],
      moreCategories: [
        'Apple',
        'Samsung',
        'Xiaomi',
        'Portable audio and headphones',
      ],
    },
    {
      categoryName: 'Fashion',
      mostPopularCategories: [
        'Footwear',
        "Women's clothing",
        'Footwear for women',
        'Clothes for men',
      ],
      moreCategories: [
        'Accessories for men',
        'Accessories for women',
        'Bags and wallets for women',
        'Mens sunglasses',
      ],
    },
    {
      categoryName: 'Health & Beauty',
      mostPopularCategories: ['Beauty', 'Makeup', 'Health', 'K-Beauty'],
      moreCategories: [
        'Vitamins and food supplements',
        'Shaving and waxing',
        'Bath and personal hygiene',
        'Oral hygiene',
      ],
    },
    {
      categoryName: 'Home & Garden',
      mostPopularCategories: [
        'Workshop Tools and Equipment',
        'Patio, garden and outdoors',
        'Home improvement',
        'Kitchen, dining and bar',
      ],
      moreCategories: ['Toys', 'Pets', 'Crafts', 'Art supplies'],
    },
    {
      categoryName: 'Sports',
      mostPopularCategories: [
        'Cycling',
        'Fitness, running and yoga',
        'Fitness Tech',
        'Fishing',
      ],
      moreCategories: [
        'Watersports',
        'Winter sports',
        'Box and MMA',
        'Swimming',
      ],
    },
    {
      categoryName: 'Collectibles & Art',
      mostPopularCategories: [
        'Collectibles',
        'Art',
        'Action figures',
        'Cartoon characters',
      ],
      moreCategories: [
        'Sports memorabilia',
        'Trading card games',
        'Antiques',
        'Comics',
      ],
    },
    {
      categoryName: 'Industrial equipment',
      mostPopularCategories: [
        'Dental healthcare',
        'Electronic equipment and supplies',
        'Metallurgy and manufacturing',
        'Motors and industrial automation',
      ],
      moreCategories: [
        'Packing and shipping',
        'Office supplies and equipment',
        'Printing and graphic arts',
        'Restaurants and food service',
      ],
    },
  ],
  deals: [
    {
      id: 1,
      dealName:
        '$20/Mo Red Pocket Prepaid Phone Plan+Kit: Unlmtd Everything 8GB 5G/LTE',
      dealPrice: 240.0,
      totalPrice: 240.0,
      dealImage: img0,
      quantity: 1,
    },
    {
      id: 2,
      dealName:
        'iRobot Roomba E6 Vacuum Cleaning Robot E6198 Manufacturer Certified Refurbished',
      dealPrice: 149.99,
      totalPrice: 149.99,
      dealImage: img1,
      quantity: 1,
    },
    {
      id: 3,
      dealName:
        'NEW Apple iPad 10.2 9th Gen Retina Display 64GB WiFi Pick GRAY & SILVER + Stylus',
      dealPrice: 379.99,
      totalPrice: 379.99,
      dealImage: img2,
      quantity: 1,
    },
    {
      id: 4,
      dealName:
        "Dickies Men's 874 Original Fit Classic Work School Uniform Straight Leg Pants",
      dealPrice: 33.88,
      totalPrice: 33.88,
      dealImage: img3,
      quantity: 1,
    },
    {
      id: 5,
      dealName:
        'Apple iPhone 13 Pro 6.1" A2639 REAL Dual Sim 256GB Phone By FedEx',
      dealPrice: 1.547,
      totalPrice: 1.547,
      dealImage: img4,
      quantity: 1,
    },
    {
      id: 6,
      dealName:
        'iRobot Roomba i7 Vacuum Cleaning Robot - Manufacturer Certified Refurbished!',
      dealPrice: 349.99,
      totalPrice: 349.99,
      dealImage: img5,
      quantity: 1,
    },
    {
      id: 7,
      dealName: 'Pokemon Evolving Skies Booster Box 36 packs Factory Sealed',
      dealPrice: 184.99,
      totalPrice: 184.99,
      dealImage: img6,
      quantity: 1,
    },
  ],
  shoppingCart: localStorage.getItem('shoppingCart')
    ? JSON.parse(localStorage.getItem('shoppingCart'))
    : [],
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setInputValueDefault(state, action) {
      let newArray = [...state.shoppingCart]
      const item = action.payload

      const existingItem = newArray.find((x) => x.id === item.id)

      existingItem.quantity = item.inputValue
      existingItem.totalPrice = existingItem.dealPrice * existingItem.quantity

      state.shoppingCart = [...newArray]
      localStorage.setItem('shoppingCart', JSON.stringify(state.shoppingCart))
    },
    incrementInputValue(state, action) {
      let newArray = [...state.shoppingCart]
      const item = action.payload

      const existingItem = newArray.find((x) => x.id === item)

      existingItem.quantity++
      existingItem.totalPrice = existingItem.dealPrice * existingItem.quantity

      state.shoppingCart = [...newArray]
      localStorage.setItem('shoppingCart', JSON.stringify(state.shoppingCart))
    },
    decrementInputValue(state, action) {
      let newArray = [...state.shoppingCart]
      const item = action.payload
      const existingItem = newArray.find((x) => x.id === item)

      existingItem.quantity--
      existingItem.totalPrice = existingItem.dealPrice * existingItem.quantity

      state.shoppingCart = [...newArray]
      localStorage.setItem('shoppingCart', JSON.stringify(state.shoppingCart))
    },
    /* addingItemQuantities(state, action) {
      let newArray = [...state.shoppingCart]
      const item = action.payload
      console.log(item)
      const existingItem = newArray.find((x) => x.id === item.id)
      existingItem.quantity = item.quantity
      existingItem.totalPrice = existingItem.quantity * existingItem.dealPrice

      state.shoppingCart = [...newArray]
      // localStorage.setItem('shoppingCart', JSON.stringify(state.shoppingCart))
    }, */
    addItemToShoppingCart(state, action) {
      let newArray = [...state.shoppingCart]
      const item = action.payload
      const existingItem = newArray.find((x) => x.id === item.id)
      if (!existingItem) {
        newArray.push(item)
      }
      state.shoppingCart = [...newArray]
      localStorage.setItem('shoppingCart', JSON.stringify(state.shoppingCart))
    },
    removeItemFromShoppingCart(state, action) {
      let newArray = [...state.shoppingCart]
      const existingItem = newArray.find((x) => x.id === action.payload)
      newArray = newArray.filter((x) => x.id !== existingItem.id)
      state.shoppingCart = [...newArray]
      localStorage.setItem('shoppingCart', JSON.stringify(state.shoppingCart))
    },
  },
})

export const {
  addItemToShoppingCart,
  removeItemFromShoppingCart,
  addingItemQuantities,
  incrementInputValue,
  decrementInputValue,
  setInputValueDefault,
} = dataSlice.actions

export default dataSlice.reducer
