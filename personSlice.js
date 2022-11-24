const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
    fullness: 100
}

const reducers = {
    eatBreakfast: state => {
        state.fullness += 10
    },
    eatLunch: state => {
        state.fullness += 10
    },
    eatDinner: state => {
        state.fullness += 10
    }
}

const personSlice = createSlice({
    name: `person`,
    initialState,
    reducers,
})

const {
    eatBreakfast,
    eatLunch,
    eatDinner,
} = personSlice.actions

module.exports = {
    personSlice,
    eatBreakfast,
    eatLunch,
    eatDinner,
}