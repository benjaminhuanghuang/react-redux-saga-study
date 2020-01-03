import React, { Component } from 'react'
import { connect } from 'react-redux';

class People extends Component {
  render() {
    return (
      <div>
          <div className="Age-label">
          People age: <span>{this.props.people.age}</span>
        </div>
        <button onClick={this.props.onAgeUp}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    people: state.people
  };
};

const mapDispachToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 3 }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 })
  };
};

export default connect(mapStateToProps, mapDispachToProps)(People)