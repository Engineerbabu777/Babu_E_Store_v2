import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './reducers/user'
import { productReducer } from "./reducers/product";
import { cartReducer } from "./reducers/cart";
import { wishlistReducer } from "./reducers/wishlist";
import { sellerReducer } from './reducers/seller';

const Store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    seller:sellerReducer

  }
})

export default Store
