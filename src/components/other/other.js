import React, { Component } from 'react'
import { connect } from 'react-redux'

//
import { changeName } from '../Hello/helloAction.js'


class Other extends Component {

  changeHello = () => {
    let text = 'other' + (Math.random() * 100)
    // 操作helloReducer.js的数据
    this.props.changeName(text)
  }

  render() {
    let { otherProp } = this.props
    console.log(this.props)
    return (
      <div>
        <h3>{otherProp.title}</h3>
        <button className="btn" onClick={this.changeHello}>我是其他组件的按钮</button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    helloProp: state.hello,
    otherProp: state.otherReducer
  }
}

// Inject a prop called "changeName" into the component
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeName: (text) => dispatch(changeName(text))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Other)