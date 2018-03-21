import { all } from 'redux-saga/effects'
import { watchForTxCreations } from './features/task-add/sagas'

export default function* rootSaga() {
  yield all([watchForTxCreations()])
}
