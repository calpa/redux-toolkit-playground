const { configureStore, combineReducers } = require("@reduxjs/toolkit");
const createSagaMiddleware = require("redux-saga").default;

const { createLogger } = require("redux-logger");

const {
  personSlice,
  eatBreakfast,
  eatLunch,
  eatDinner,
} = require("./person/personSlice");
const { personSaga } = require("./person/saga");

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({
  timestamp: true,
  diff: true,
});

const store = configureStore({
  reducer: combineReducers({
    person: personSlice.reducer,
  }),
  middleware: [sagaMiddleware, logger],
});

sagaMiddleware.run(personSaga);

store.dispatch(eatBreakfast());
store.dispatch(eatLunch());
store.dispatch(eatDinner());
