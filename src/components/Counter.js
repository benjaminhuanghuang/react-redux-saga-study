import React, { Component } from 'react'
import {connect} from 'react-redux';
//
import {increment, incrementAsync} from '../actions/counter'

/*
  Normal redux
*/
class Counter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.increment}>{this.props.counter}</button>
        <button onClick={this.props.incrementAsync}>{this.props.counter}</button>
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