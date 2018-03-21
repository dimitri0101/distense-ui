import React from 'react'
import classNames from 'classnames'
import { List } from 'semantic-ui-react'
import Tx from './Tx'

export default ({ pendingTxs }) => {
  return (
    <List divided relaxed>
      {pendingTxs.map(tx => <Tx tx={tx} />)}
    </List>
  )
}
