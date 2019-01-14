import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class DescriptionItem extends Component {
	render() {
        return (
            <div className="rounded col h1">
                <div className={`fas ${this.props.icon}`}>
                    <p className="h3 font-weight-bold">{this.props.title}</p>
                    <p className="h6 font-weight-bold">{this.props.description}</p>
                </div>
            </div>
        );
	}
}

export default DescriptionItem;