import React, { useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { Board } from './Board/Board'
import { Keyboard } from './Keyboard/Keyboard'

export class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            maxLength: 5,
            lock: false,
            currentRow: 0,
            currentWord: '',
            secretWord: 'AAABA',
            passedColorCode: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
        }
    }
    
    updateWord(input) {
        if (!this.state.lock){
            if(input === 'Backspace'){
                if(this.state.currentWord.length > 0) {
                    this.setState({currentWord: this.state.currentWord.substring(0, this.state.currentWord.length - 1)})
                }
            } else if(input === 'Enter'){
                if(this.state.currentWord.length === this.state.maxLength && this.state.currentRow !== 5){
                    if (this.state.secretWord === this.state.currentWord){
                        this.setState({lock: true})
                    }
                    else{
                        this.setState({currentRow:this.state.currentRow + 1, currentWord:''})
                    }
                    this.setState({
                        passedColorCode: replaceArray(this.state.passedColorCode, this.state.currentRow, avaliateWord(this.state.currentWord, this.state.secretWord))
                    })
                }
            }
            else if((/[A-Za-z]/).test(input) && this.state.currentWord.length < this.state.maxLength && input.length === 1){
                this.setState({currentWord: this.state.currentWord + input.toUpperCase()})
            }
        }
    }
    
    render() {
        let word = this.state.currentWord
        let currentRow = this.state.currentRow
        let colorCode = this.state.passedColorCode
        return(
            <div onKeyDown={(n) => this.updateWord(n.key)} tabIndex="0">
                <Board maxLength={this.state.maxLength} currentWord={word} currentRow={currentRow} colorCode={colorCode}/>
                <Keyboard maxLength={this.state.maxLength} keyHandler={(n) => this.updateWord(n)}/>
            </div>
        )
    }
}

function avaliateWord(currentWord, secretWord){
    // 0 = NA, 1 = Nao esta, 2 = Posicao incorreta, 3 = Correto
    let avaliation = [1, 1, 1, 1, 1]
    let secretWordTemp = secretWord.slice()
    
    for(let i = 0; i < secretWord.length; i++){
        if(secretWord[i] === currentWord[i]){
            avaliation[i] = 3
            secretWordTemp = replaceIndex(secretWordTemp, i, '#')
        }
    }
    
    for(let i = 0; i < secretWord.length; i++){
        if(secretWord[i] !== currentWord[i] && secretWordTemp.includes(currentWord[i])){
            avaliation[i] = 2
        }
    }
    
    return avaliation
}

function replaceIndex(string, index, char){
    let a = string.split('')
    a[index] = char
    return a.join('')
}

function replaceArray(array, index, replacement){
    let a = array
    a[index] = replacement
    return a
}