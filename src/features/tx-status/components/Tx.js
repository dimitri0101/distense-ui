import React from 'react'
// import classNames from 'classnames'
import { List } from 'semantic-ui-react'

export default ({ tx }) => {
  return (
    <List.Item>
      Tx:
      {tx.hash}
    </List.Item>
  )
}
