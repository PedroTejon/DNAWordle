import React from 'react';

export class Keyboard extends React.Component{
    render() {
        return (
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', width:'30vw'}}>
                <div style={{display:'flex', flexDirection:'row'}}>
                    {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map(
                        (n) => {
                            return <button onClick={() => this.props.keyHandler(n)}>{n}</button>
                        })
                    }
                </div>
                <div style={{display:'flex', flexDirection:'row'}}>
                    {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map(
                            (n) => {
                                return <button onClick={() => this.props.keyHandler(n)}>{n}</button>
                        })
                    }
                </div>
                <div style={{display:'flex', flexDirection:'row'}}>
                    {['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Backspace'].map(
                            (n) => {
                                return <button onClick={() => this.props.keyHandler(n)}>{n}</button>
                        })
                    }
                </div>
            </div>
        )
    }
}