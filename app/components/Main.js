import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='main-container'>
                {this.props.children}
            </div>
        )
    }
}

export default Main;
