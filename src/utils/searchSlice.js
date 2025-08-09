import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
     name: 'search',
     initialState:{  
          data: {}, // Stores key-value pairs
          order: [], // Stores keys in LRU order (most recent at the end)
          capacity: 5, // Maximum cache size
     },
     reducers:{

          // simple caching without any LRU concept
          cacheResults: (state, action) => {

               const key = Object.keys(action.payload)[0]
               const value = action.payload[key]       
               state.data[key] = value;
               },

          
          
          // caching with LRU concept
          setLRUCache: (state, action) => {

               const key = Object.keys(action.payload)[0]

               const value = action.payload[key]  

               if (state.data[key]) {
                    // Item exists, update value and move to end of order
                    state.data[key] = value;
                    state.order = state.order.filter(itemKey => itemKey !== key);
                    state.order.push(key);
               } else {
                    // New item
                    if (state.order.length >= state.capacity) {
                    // Cache full, evict least recently used
                    const lruKey = state.order.shift(); // Remove from beginning
                    delete state.data[lruKey];
                    }
                    state.data[key] = value;
                    state.order.push(key); // Add to end
               }
               },
          
          getLRUCache: (state, action) => {
               const key = action.payload;
               if (state.data[key]) {
               // Item accessed, move to end of order
               state.order = state.order.filter(itemKey => itemKey !== key);
               state.order.push(key);
               }
               // The actual return value would be handled by a selector or thunk
          },
     }
        
     

}
   
);
 export const {cacheResults , setLRUCache, getLRUCache} = searchSlice.actions
export default searchSlice.reducer