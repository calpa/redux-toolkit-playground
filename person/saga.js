const { call, put, takeEvery } = require("redux-saga/effects");

function* eatBreakfastSaga() {
  yield put({
    type: "person/eatBreakfastSuccess",
  });
}

function* eatLunchSaga() {
  yield put({
    type: "person/eatLunchSuccess",
  });
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
