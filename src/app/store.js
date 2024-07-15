import { configureStore } from "@reduxjs/toolkit"
import photoReducer from 'features/Photo/photoSlice'
//  const rootReducer = {
//     photos:photoReducer
//  }
console.log(photoReducer);

const store = configureStore({
    reducer: {
        photos: photoReducer,
      },
    
})
export default store
