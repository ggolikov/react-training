import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
                <h1>Github Battle</h1>
                <p className='lead'>What even is a jQuery?</p>
                <Link to='/playerOne'>
                    <button type='button' className='btn btn-lg btn-success'>Get Started</button>
                </Link>
            </div>
        )
    }
}

export default Home;
