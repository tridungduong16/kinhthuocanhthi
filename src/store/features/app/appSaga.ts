import { put, takeLatest } from 'redux-saga/effects'
import { fetchDataRequest, setLoaded } from './appSlice'

function* fetchDataWorker() {
  try {
    yield put(setLoaded(true))
  } catch (error) {
    console.error(error)
  }
}

export function* appSaga() {
  yield takeLatest(fetchDataRequest.type, fetchDataWorker)
}
