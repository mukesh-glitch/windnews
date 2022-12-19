
import React, { Component } from 'react'

export class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    // componentDidMount() {
    //     this.timerID = setInterval(
    //         () => this.tick(),
    //         1000
    //     );
    // }

    // componentWillUnmount() {
    //     clearInterval(this.timerID);
    // }

    // tick() {
    //     this.setState({
    //         date: new Date()
    //     });
    // }

    render() {
        return (
            <div>

                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                {console.log(this.state.date.toLocaleTimeString())}
            </div>
        );
    }
}


export default Clock

