import React from 'react';
import {LetterBox} from './LetterBox'

export class WordRow extends React.Component{
    a(){
        let word
        if (this.props.isSelected === "true"){
            word = this.props.word + '_    '
        } else{
            word = this.props.word + '     '
        }
        let boxes = []
        for (let i = 0; i < 5; i++){
            boxes.push(<LetterBox key={i} letter={word[i]} color={this.props.colors[i]}/>)
        }
        return boxes
    }
    
    render() {
        
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '0.5vw'
            }}>
                {this.a()}
            </div>
        )
    }
}