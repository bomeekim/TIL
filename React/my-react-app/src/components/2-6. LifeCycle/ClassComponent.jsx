import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props) {
        super(props)
        console.log('constructor')
        this.state = { date: new Date() }
        /** handleClick 에서 this에 접근하려면 다음과 같이 this를 바인딩 해주어야함
         * 왜냐하면 handleClick 내부에서는 외부에 있는 this에 대해서 알 지 못함
         * 함수를 arrow function 으로 선언하면 바인딩해주지 않아도 됨
         * arrow function 은 바깥과 this를 쉐어함
         */
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.timerId = setInterval(() => this.tick(), 10000)
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
        clearInterval(this.timerId)
    }

    tick() {
        // console.log('tick')
        this.setState({ date: new Date() })
    }

    handleClick() {
        alert(this.state.date)
    }

    handleClickArrow = () => {
        alert(this.state.date)
    }

    render() {
        console.log('render')
        return (
            <div>
                <h1 onClick={this.handleClick}>Hello, world!</h1>
                <h1 onClick={this.handleClickArrow}>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}
