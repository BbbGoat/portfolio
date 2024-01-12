import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import dataReducer from './slice/dataSlice'

const rootReducer = combineReducers({
    // data: dataReducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});

export default store;