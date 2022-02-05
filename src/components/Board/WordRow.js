import React from 'react';
import {LetterBox} from './LetterBox'

export class WordRow extends React.Component{
    render() {
        let word
        if (this.props.isSelected === "true"){
            word = this.props.word + '_    '
        } else{
            word = this.props.word + '     '
        }
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '1vw'
            }}>
                {word.substring(0, 5).split('').map((n) => {
                    return <LetterBox letter={n}/>
                })}
            </div>
        )
    }
}