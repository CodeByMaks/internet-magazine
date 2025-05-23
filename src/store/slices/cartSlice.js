import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    total: 0,
    status: 'idle',
    error: null,
    lastAction: null
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
      state.lastAction = { type: 'add', item: action.payload };
    },
    removeFromCart: (state, action) => {
      const itemToRemove = state.items.find(item => item.id === action.payload);
      state.items = state.items.filter(item => item.id !== action.payload);
      state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
      state.lastAction = { type: 'remove', item: itemToRemove };
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        const oldQuantity = item.quantity;
        item.quantity = Math.max(1, Math.min(quantity, item.stock || 99));
        state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
        state.lastAction = { 
          type: 'update', 
          item,
          oldQuantity,
          newQuantity: item.quantity
        };
      }
    },
    clearCart: (state) => {
      const previousItems = [...state.items];
      state.items = [];
      state.total = 0;
      state.lastAction = { type: 'clear', items: previousItems };
    },
    undoLastAction: (state) => {
      if (!state.lastAction) return;

      switch (state.lastAction.type) {
        case 'add':
          state.items = state.items.filter(item => item.id !== state.lastAction.item.id);
          break;
        case 'remove':
          state.items.push(state.lastAction.item);
          break;
        case 'update':
          const item = state.items.find(item => item.id === state.lastAction.item.id);
          if (item) {
            item.quantity = state.lastAction.oldQuantity;
          }
          break;
        case 'clear':
          state.items = state.lastAction.items;
          break;
      }

      state.total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
      state.lastAction = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.status = 'error';
    },
    clearError: (state) => {
      state.error = null;
      state.status = 'idle';
    }
  }
});

export const { 
  addToCart, 
  removeFromCart, 
  updateQuantity, 
  clearCart,
  undoLastAction,
  setError,
  clearError
} = cartSlice.actions;

export default cartSlice.reducer; 