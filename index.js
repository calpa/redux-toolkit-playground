const { configureStore, combineReducers } = require('@reduxjs/toolkit')

const { personSlice, eatBreakfast, eatLunch, eatDinner } = require('./personSlice')

const store = configureStore({
    reducer: combineReducers({
        person: personSlice.reducer
    })
})

store.subscribe(() => console.log(store.getState()))

store.dispatch(eatBreakfast())
store.dispatch(eatLunch())
store.dispatch(eatDinner())