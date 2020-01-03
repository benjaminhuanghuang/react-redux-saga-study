import React, { Component } from 'react'

//引用connect
import { connect } from 'react-redux'
import './hello.css'

//
import { changeName } from './helloAction.js'


class Hello extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '学习redux'
    }
  }

  // handler for button click
  changeTitle() {
    let title = '学习redux' + Math.ceil(Math.random() * 100)
    // this.setState({
    //   title:title
    // })
    this.props.changeName(title)
  }
  render() {
    //此处打印this.props应该可以看到helloProp这个对象了，证明数据已经挂在到组件紫红
    console.log(this.props)
    let { helloProp } = this.props
    return (
      <div>
        <h2>{this.state.title}</h2>
        <h3>我是来自redux数据{helloProp.name}</h3>
        <button className="btn" onClick={() => { this.changeTitle() }}>点击我改变标题</button>
      </div>
    )
  }
}


//mapStateToProps是connect一个参数， 描述如何将store中的数据绑定到组件的props上 
const mapStateToProps = (state, ownProps) => {
  return {
    helloProp: state.hello //hello是在rootReducer中的名字
  }
}
//Inject a prop called "changeName" into the component
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeName: (text) => dispatch(changeName(text))
  }
}
//通过connect高阶函数绑定数据
export default connect(mapStateToProps, mapDispatchToProps)(Hello)