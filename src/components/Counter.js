import React, { Component } from 'react'
import {connect} from 'react-redux';
//
import {increment, incrementAsync} from '../actions/counter'

class Counter extends Component {
  render() {
    return (
      <div>
        <div>
          <span>{this.props.counter}</span>
        </div>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.incrementAsync}>Increment Async</button>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps, {increment,incrementAsync})(Counter)