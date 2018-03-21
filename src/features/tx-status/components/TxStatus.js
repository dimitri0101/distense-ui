import React from 'react'
import classNames from 'classnames'
import { Menu } from 'semantic-ui-react'

export default ({ txPending, onClick, numPendingTxs }) => {
  return (
    <Menu.Item onClick={this.onClick} title="">
      <span className={classNames({ 'tx-pending': txPending })}>
        Txs:
        {numPendingTxs}
      </span>
    </Menu.Item>
  )
}
