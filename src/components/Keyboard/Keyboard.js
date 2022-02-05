import React from 'react';

export class Keyboard extends React.Component{
    render() {
        return (
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', width:'30vw'}}>
                <div style={{display:'flex', flexDirection:'row'}}>
                    {['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'].map(
                        (n) => {
                            return <button onClick={() => this.props.keyHandler(n)}>{n}</button>
                        })
                    }
                </div>
                <div style={{display:'flex', flexDirection:'row'}}>
                    {['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'].map(
                            (n) => {
                                return <button onClick={() => this.props.keyHandler(n)}>{n}</button>
                        })
                    }
                </div>
                <div style={{display:'flex', flexDirection:'row'}}>
                    {['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace'].map(
                            (n) => {
                                return <button onClick={() => this.props.keyHandler(n)}>{n}</button>
                        })
                    }
                </div>
            </div>
        )
    }
}