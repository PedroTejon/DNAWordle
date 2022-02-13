import React from 'react';
import { Key } from './Key';

export class Keyboard extends React.Component{
    render() {
        return (
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'1vh', marginTop:'3vh'}}>
                <div style={{display:'flex', flexDirection:'row', gap:'1vh'}}>
                    {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map(
                        (n) => {
                            return <Key onClick={() => this.props.keyHandler(n)} letter={n}/>
                        })
                    }
                </div>
                <div style={{display:'flex', flexDirection:'row', gap:'1vh'}}>
                    {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map(
                            (n) => {
                                return <Key onClick={() => this.props.keyHandler(n)} letter={n}/>
                        })
                    }
                </div>
                <div style={{display:'flex', flexDirection:'row', gap:'1vh'}}>
                    {['↤', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '←'].map(
                            (n) => {
                                return <Key onClick={() => this.props.keyHandler(n)} letter={n}/>
                        })
                    }
                </div>
            </div>
        )
    }
}