import { takeEvery, put, call, take, race } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import fetch from 'cross-fetch'

import {
  NUM_PENDING_TXS_DECREMENT,
  NUM_PENDING_TXS_INCREMENT
} from '../status/reducers'

export const incrementNumPendingTx = txHash => ({
  type: NUM_PENDING_TXS_INCREMENT,
  txHash
})

// export const decrementNumPendingTx = txHash => ({
//   type: NUM_PENDING_TXS_DECREMENT,
//   txHash
// })

function* fetchTxStatus(txHash) {
  yield call(delay, 10000)
  if (!txHash) return
  console.log(`checking tx status: ${txHash}`)
  const host =
    window.web3.version.network === 3
      ? `http://api-ropsten.etherscan.io/`
      : 'https://api.etherscan.io/'
  const url =
    host +
    `api?module=transaction&action=gettxreceiptstatus&txhash=${txHash}&apikey=WDA7QAKYNDWCDC8D554RHVTNVP271SHE9G`
  const response = yield call(fetch, url)
  if (response && response.result && response.result.status === '1') {
    console.log(`txHash ${txHash} successful`)
    yield put(NUM_PENDING_TXS_DECREMENT, txHash)
  } else console.log(`txHash pending ${txHash} `)
}

function* watchTxStatus(action) {
  const txHash = action.txHash
  while (true)
    yield race({
      txStatus: call(fetchTxStatus, txHash),
      cancel: take(NUM_PENDING_TXS_DECREMENT)
    })
}

export function* watchForTxCreations() {
  console.log('listening for pending txs')
  yield takeEvery(NUM_PENDING_TXS_INCREMENT, watchTxStatus)
}
