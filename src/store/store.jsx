import { configureStore } from "@reduxjs/toolkit";
import  getProductsreducer  from "../slices/getproductslice";

 const store = configureStore({
    reducer:{
        getProducts : getProductsreducer
    }
});

export default store;