import React from 'react';

export class LetterBox extends React.Component{
    render() {
        return (
            <div style={{
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