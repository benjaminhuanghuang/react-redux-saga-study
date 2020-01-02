import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

//
import helloAction from '../Hello/helloAction.js'


class Other extends Component {

  changeName() {
    let { helloAction } = this.props;
    let text = 'other' + (Math.random() * 100)
    // 操作helloReducer.js的数据
    helloAction.changeName(text)
  }

  render() {
    let { otherProp } = this.props
    console.log(this.props)
    return (
      <div>
        <h3>{otherProp.title}</h3>
        <button className="btn" onClick={() => { this.changeName() }}>我是其他组件的按钮</button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    helloProp: state.helloReducer,
    otherProp: state.otherReducer
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    helloAction: bindActionCreators(helloAction, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Other)