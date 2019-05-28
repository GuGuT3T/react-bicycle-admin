import React from 'react'
import Child from './Chiild'
export default class Life extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  handAdd = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return <div style={{}}>
      <p>生命周期</p>
      <button onClick={this.handAdd}>点击一下</button>
      <p>{this.state.count}父组件</p>
      <Child name={this.state.count}></Child>
    </div>
  }
}