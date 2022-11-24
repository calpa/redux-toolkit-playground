const { call, put, takeEvery } = require("redux-saga/effects");

function* buyMilkSaga() {
  yield put({
    type: "cash/buyMilkSuccess",
  });
}

function* cashSaga() {
  yield takeEvery("cash/buyMilk", buyMilkSaga);
}

module.exports = {
  cashSaga,
};
