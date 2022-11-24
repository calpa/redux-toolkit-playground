const { select, call, put, takeEvery } = require("redux-saga/effects");

function* eatBreakfastSaga() {
  yield put({
    type: "person/eatBreakfastSuccess",
  });
}

const getCash = (state) => state.cash;

function* eatLunchSaga(action) {
  const { cash } = yield select(getCash);
  try {
    if (cash >= 20) {
      yield put({
        type: "person/eatLunchSuccess",
      });
      yield put({
        type: "cash/reduceCash",
        amount: action.payload.cost,
      });
    } else {
      throw new Error("Not enough cash to eat lunch");
    }
  } catch (error) {
    yield put({
      type: "person/eatLunchError",
      error,
    });
  }
}

function* eatDinnerSaga() {
  yield put({
    type: "person/eatDinnerSuccess",
  });
}

function* personSaga() {
  yield takeEvery("person/eatBreakfast", eatBreakfastSaga);
  yield takeEvery("person/eatLunch", eatLunchSaga);
  yield takeEvery("person/eatDinner", eatDinnerSaga);
}

module.exports = {
  personSaga,
};
