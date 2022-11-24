const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  fullness: 100,
  happiness: 100,
  healthy: 100,
};

const reducers = {
  eatBreakfastSuccess: (state) => {
    state.fullness += 10;
  },
  eatLunch: () => {},
  eatLunchSuccess: (state) => {
    state.fullness += 10;
  },
  eatDinnerSuccess: (state) => {
    state.fullness += 10;
  },
};

const personSlice = createSlice({
  name: `person`,
  initialState,
  reducers,
});

const { eatBreakfastSuccess, eatLunch, eatLunchSuccess, eatDinnerSuccess } =
  personSlice.actions;

module.exports = {
  personSlice,
  eatBreakfastSuccess,
  eatLunch,
  eatLunchSuccess,
  eatDinnerSuccess,
};
