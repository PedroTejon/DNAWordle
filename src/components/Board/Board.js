import React from 'react';
import { WordRow } from './WordRow'

export class Board extends React.Component{
    constructor(props){
        super(props);
        this.state={
            wordList: ['', '', '', '', '', '']
        }
    }
    
    modificarLista(palavra){
        let wordList = this.state.wordList
        wordList[this.props.currentRow] = palavra
        return wordList
    }
    
    aaa(){
        let rows = []
        this.state.wordList.forEach((row, x) => {
            rows.push(<WordRow word={row} isSelected={x === this.props.currentRow ? "true" : "false"} maxLength={this.props.maxLength}/>)
        })
        return rows
    }
    
    render() {
        if (this.state.wordList[this.props.currentRow] !== this.props.currentWord){
            this.setState({wordList: this.modificarLista(this.props.currentWord)})
        }
        return(
            <div>
                {this.aaa()}
            </div>
        )
    }
}