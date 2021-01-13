import React, { Component } from 'react'
import Child from './Child'

export default class AppLang extends Component {
    renter() {
        return (
            <div className='AppLang'>
                <Child />
            </div>
        );
    }
}