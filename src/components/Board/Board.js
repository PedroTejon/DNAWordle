import React from 'react';
import { WordRow } from './WordRow'

export class Board extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentRow: 0,
            currentColumn: 0,
        }
    }
    
    render() {
        let word = this.props.currentWord
        return(
            <div>
                <WordRow word={word} maxLength={this.props.maxLength}/>
            </div>
        )
    }
}