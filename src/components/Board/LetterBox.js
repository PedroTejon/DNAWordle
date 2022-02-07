import React from 'react';

export class LetterBox extends React.Component{
    render() {
        const colors = {
            3: 'green',
            2: 'yellow',
            1: 'gray',
            0: 'white'
        }
        return (
            <div style={{
                backgroundColor: colors[this.props.color],
                display: 'flex',
                width:'5vw',
                height:'10vh',
                border: 'gray solid 1px',
                borderRadius: '20%',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '4rem',
                paddingBottom: '1vh'
            }}>
                {this.props.letter}
            </div>
        )
    }
}