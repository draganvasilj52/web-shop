import { createSlice } from '@reduxjs/toolkit'

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
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
})

export default dataSlice.reducer
