import React, { Component } from 'react'
import { connect } from 'react-redux'

import TxStatus from './TxStatus'
import TxList from './TxList'

export class TxStatusContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { issues: [] }
  }

  componentDidMount() {
    const txPending = this.props.numPendingTxs
    this.setState({
      txPending,
      txIncrement: txPending > this.state.txPending,
      txDecrement: txPending < this.state.txPending
    })
  }

  onClick() {
    console.log(`click`)
    this.setState({
      renderTxList: !this.state.renderTxList
    })
  }

  render() {
    return (
      <div>
        {this.state.renderTxList && <TxList {...this.props.pendingTxs} />}
        <TxStatus {...this.state} onClick={this.onClick} {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  numPendingTxs: state.status.status.numPendingTxs,
  pendingTxs: state.status.status.pendingTxs
})

export default connect(mapStateToProps)(TxStatusContainer)
