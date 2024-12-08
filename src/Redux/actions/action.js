import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    "fetchProduct",
    async () => {
        const res = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
        return res.data;
    }
);