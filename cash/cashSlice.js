const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cash: 100,
};

const reducers = {
  addCash: (state, action) => {
    state.cash += action.amount;
  },
  reduceCash: (state, action) => {
    state.cash -= action.amount;
  },
};

const cashSlice = createSlice({
  name: `cash`,
  initialState,
  reducers,
});

const { addCash } = cashSlice.actions;

module.exports = {
  cashSlice,
  // buyMilk,
};
