import React, { useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { Board } from './Board/Board'
import { Keyboard } from './Keyboard/Keyboard'

export class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            maxLength: 5,
            currentRow: 0,
            currentWord: ''
        }
    }
    
    
    
    updateWord(input) {
        console.log(input)
        if(input === 'Backspace'){
            if(this.state.currentWord.length > 0) {
                this.setState({currentWord: this.state.currentWord.substring(0, this.state.currentWord.length - 1)})
            }
        } else if(input === 'Enter'){
            if(this.state.currentWord.length === this.state.maxLength && this.state.currentRow !== 5){
                this.setState({currentWord:'',currentRow:this.state.currentRow + 1})
            }
        }
        else if((/[A-Za-z]/).test(input) && this.state.currentWord.length < this.state.maxLength && input.length === 1){
            this.setState({currentWord: this.state.currentWord + input.toUpperCase()})
        }
    }
    
    render() {
        let word = this.state.currentWord
        let currentRow = this.state.currentRow
        return(
            <div onKeyDown={(n) => this.updateWord(n.key)} tabIndex="0">
                <Board maxLength={this.state.maxLength} currentWord={word} currentRow={currentRow}/>
                <Keyboard maxLength={this.state.maxLength} keyHandler={(n) => this.updateWord(n)}/>
            </div>
        )
    }
}

