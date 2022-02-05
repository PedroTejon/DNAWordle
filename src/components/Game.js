import React from 'react';
import { Board } from './Board/Board'
import { Keyboard } from './Keyboard/Keyboard'

export class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            maxLength: 5,
            currentWord: ''
        }
    }
    
    updateWord(input) {
        if(input === 'Backspace'){
            if(this.state.currentWord.length > 0) {
                this.setState({currentWord: this.state.currentWord.substring(0, this.state.currentWord.length - 1)})
            }
        } else if(input === 'Enter'){
        }
        else if((/[A-Za-z]/).test(input)){
            this.setState({currentWord: this.state.currentWord + input})
        }
    }
    
    render() {
        let word = this.state.currentWord
        return(
            <div>
                <h1>{word}</h1>
                <Board maxLength={this.state.maxLength} currentWord={word}/>
                <Keyboard maxLength={this.state.maxLength} keyHandler={(n) => this.updateWord(n)}/>
            </div>
        )
    }
}