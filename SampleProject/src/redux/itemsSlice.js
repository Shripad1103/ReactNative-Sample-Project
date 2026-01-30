import { createSlice } from '@reduxjs/toolkit';

let initialState = [
  { id: 1, name: 'Laptop', stock: 12 },
  { id: 2, name: 'Smartphone', stock: 30 },
  { id: 3, name: 'Headphones', stock: 8 },
  { id: 4, name: 'Keyboard', stock: 25 },
  { id: 5, name: 'Mouse', stock: 40 },
  { id: 6, name: 'Monitor', stock: 3 },
  { id: 7, name: 'Printer', stock: 6 },
  { id: 8, name: 'USB Drive', stock: 50 },
];

const itemSlice = createSlice({
  name: 'items',
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    deleteItem: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
    updateItem: (state, action) => {
      const index = state.findIndex(item => item.id === action.payload.id);
      
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addItem, deleteItem, updateItem } = itemSlice.actions;
export default itemSlice.reducer;
