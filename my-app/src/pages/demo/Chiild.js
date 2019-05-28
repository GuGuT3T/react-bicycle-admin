import React from 'react'
export default class Chiild extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  componentWillMount() {
    console.log('will mount')
  }
  componentDidMount() {
    console.log('did mount')
  }
  componentWillReceiveProps(newProps) {
    console.log('will props', newProps)
  }
  shouldComponentUpdate() { // 调用setstate就会调用
    console.log('should')
    return true
  }
  componentWillUpdate() {
    console.log('will update')
  }
  componentDidUpdate() {
    console.log('did update')
  }
  render() {
    return <div>
      <p>{this.props.name}</p>
      <p>这是一个子组件</p>
    </div>
  }
}