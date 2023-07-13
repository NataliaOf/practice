import { configureStore } from "@reduxjs/toolkit";
import todo2Slice from "./todo2Slice";

export  const store = configureStore({
   reducer:{
     todos: todo2Slice,
   }
})