const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  fullness: 100,
  happiness: 100,
  healthy: 100,
  spirit: 100,
};

const reducers = {
  eatBreakfastSuccess: (state) => {
    state.fullness += 10;
  },
  eatLunch: () => {},
  eatLunchSuccess: (state) => {
    state.fullness += 10;
  },
  eatLunchError: (state) => {},
  eatDinnerSuccess: (state) => {
    state.fullness += 10;
  },
  worship: () => {},
  worshipSuccess: (state) => {
    state.spirit += 10;
  },
  worshipFail: (state) => {
    state.spirit -= 10;
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
