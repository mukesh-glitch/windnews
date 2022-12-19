import React, { Component } from 'react'
import loding from './Spinner.gif'

export default class Spinner extends Component {
    render() {
        return (
            <div className='text-center '>
                <img style={{ height: "3rem", margin: "3rem" }} src={loding} alt="" />
            </div>
        )
    }
}
