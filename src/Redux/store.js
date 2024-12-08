import {configureStore} from '@reduxjs/toolkit';
import ProductReducer from './DataSlice';
export const store = configureStore({
reducer: {
product: ProductReducer,
},
});