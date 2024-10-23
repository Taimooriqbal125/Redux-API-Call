import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    products : [],
    loading : false,
    error : false
}

export const getProducts = createAsyncThunk("getProducts",async ()=>{
    const response = await fetch("https://fakestoreapi.com/products/1");
    return response.json()
});

const productSlice = createSlice({
    name : "getProducts",
    initialState,
    extraReducers : (builder)=>{
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            state.products = action.payload;
            state.loading = false
        }),
        builder.addCase(getProducts.pending,(state,action)=>{
            state.loading = true
            state.error = false
        }),
        builder.addCase(getProducts.rejected,(state,action)=>{
            state.loading = true
            state.error = action.payload
        })
    
    }
})


export default productSlice.reducer;