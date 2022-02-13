import React from 'react';
import '../../index.css';

export class Key extends React.Component{
    render() {
        return (
            <button onClick={() => this.props.onClick(this.props.letter)} className="keyButtons">
                {this.props.letter}
            </button>
        )
    }
}