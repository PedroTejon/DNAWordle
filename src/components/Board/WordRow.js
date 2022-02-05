import React from 'react';
import {LetterBox} from './LetterBox'

export class WordRow extends React.Component{
    render() {
        let word = this.props.word + '_    '
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