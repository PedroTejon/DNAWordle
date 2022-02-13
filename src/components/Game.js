import React from 'react';
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
            secretWord: 'FEDOR',
            passedColorCode: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
        }
    }
    
    updateWord(input) {
        if (!this.state.lock){
            if(input === '←' || input === 'Backspace'){
                if(this.state.currentWord.length > 0) {
                    this.setState({currentWord: this.state.currentWord.substring(0, this.state.currentWord.length - 1)})
                }
            } else if(input === '↤' || input === 'Enter'){
                if(this.state.currentWord.length === this.state.maxLength){
                    if (this.state.secretWord === this.state.currentWord || this.state.currentRow === 5){
                        this.setState({lock: true})
                    }
                    else if (this.state.currentRow !== 5){
                            this.setState({currentWord:''})
                            this.setState({currentRow:this.state.currentRow + 1})
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
            <div onKeyDown={(n) => this.updateWord(n.key)} tabIndex="0" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width:"100vw",
                    height:"100vh"
                }}>
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
            secretWordTemp = replaceIndex(secretWordTemp, secretWordTemp.indexOf(currentWord[i]), '#')
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