import { createSlice } from "@reduxjs/toolkit";
import { Mydata } from "../data/Mydata";

const initialState={
    Mydata,
    cart:[],
    opsearch: "",
}

const CartSlice=createSlice({
    initialState,
    name:"bag",

    reducers:{
        addToBag:(state,action)=>{
            // state.cart.push(action.payload);
            const newItem=action.payload;
            if (!state.cart.some(item => item.id === newItem.id)) {
                state.cart.push(newItem);
              }
        
        },
        deleteItem:(state,action)=>{
            state.cart=state.cart.filter((item)=>item.id!==action.payload.id);
        },      
    }
});

export default CartSlice.reducer;
export const {addToBag,optionSearch,deleteItem}=CartSlice.actions;
