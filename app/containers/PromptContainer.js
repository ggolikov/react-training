import React, { Component } from 'react';

class PromptContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
                <h1>{this.props.route.header}</h1>
                <div className="col-sm-12">
                    <form>
                        <div className="form-group">
                            <input
                            placeholder="Github Username"
                                type="text" />
                        </div>
                        <div className="form-group col-sm-4 col-sm-offset-4">
                            <button className="btn btn-block btn-success"
                                type="button">
                                Continue
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default PromptContainer;
