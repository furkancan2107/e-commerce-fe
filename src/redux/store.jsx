import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Reducer/Product/ProductReducer";
import AdminReducer, { adminReducer } from "./Reducer/Admin/AdminReducer";
import UserReducer from "./Reducer/User/UserReducer";
import CartReducer from "./Reducer/Product/CartReducer";
import CommentReducer from "./Reducer/Product/CommentReducer";
import LikeReducer from "./Reducer/Product/LikeReducer";

export const store = configureStore({
    reducer: {
        product: ProductReducer,
        admin: AdminReducer,
        user: UserReducer,
        cart: CartReducer,
        comment: CommentReducer,
        like : LikeReducer,
    }
});
export default store;