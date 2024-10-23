import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : [],
    loading : false,
    error : false
}

const gettestvalues = createAsyncThunk("gettestingvalues", async ()=>{
    const response = await fetch("");
    return response.json()
})

const gettestingslice = createSlice({
    name : "testingvalues",
    initialState,
    extraReducers : (builder)=>{
        builder.addCase(gettestvalues.fulfilled,(state,action)=>{
            state.value = action.payload;
        })
    }
})