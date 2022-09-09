import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemList: [],
        totalQuantity: 0,
        showCart: false,
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.itemList.find((item) => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.itemList.push(newItem);
            }
        },
        decrement (state, action) {
            const newItem = action.payload;
            const existingItem = state.itemList.find((item) => item.id === newItem.id);
            if (existingItem.quantity <= newItem.quantity) {
                existingItem.quantity--;
            } else {
                existingItem.quantity = state.itemList.find((item) => item.id === newItem.id).quantity;
            }
        },
        increment(state, action) {
            const newItem = action.payload;
            const existingItem = state.itemList.find((item) => item.id === newItem.id);
            existingItem.quantity++;
        },
        deleteItem(state, action) {
            const newItem = action.payload;
            console.log(newItem)
            state.itemList.splice(newItem, 1)
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;