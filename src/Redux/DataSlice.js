import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "./actions/action";


const Productslice = createSlice({
    name: 'products',
    initialState: {
        result: [],
        isLoader: false,
        isError: false,

    },
     extraReducers: builder => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoader = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoader = false;
            state.result = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isLoader = false;
            state.isError = true;
        })
    },
});

export default Productslice.reducer;