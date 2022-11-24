const { all } = require("redux-saga/effects");
const { configureStore, combineReducers } = require("@reduxjs/toolkit");
const createSagaMiddleware = require("redux-saga").default;

const { createLogger } = require("redux-logger");

const { personSlice, eatLunch } = require("./person/personSlice");

const { cashSlice } = require("./cash/cashSlice");

const { personSaga } = require("./person/saga");
const { cashSaga } = require("./cash/saga");

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({
  timestamp: true,
  diff: true,
});

const store = configureStore({
  reducer: combineReducers({
    person: personSlice.reducer,
    cash: cashSlice.reducer,
  }),
  middleware: [sagaMiddleware, logger],
});

function* rootSaga() {
  yield all([personSaga(), cashSaga()]);
}

sagaMiddleware.run(rootSaga);

// store.dispatch(eatBreakfast());
store.dispatch(
  eatLunch({
    cuisine: "Japanese",
    cost: 40,
  })
);
// store.dispatch(eatDinner());
// store.dispatch(buyMilk());
