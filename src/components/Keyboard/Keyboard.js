import React from 'react';
import { Key } from './Key';

export class Keyboard extends React.Component{
    createRow(keyLayout){
        let keys = []
        for (let n of keyLayout){
            keys.push(<Key onClick={() => this.props.keyHandler(n)} key={n} letter={n}/>)
        }
        return keys
    }
    render() {
        return (
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'1vh', marginTop:'3vh'}}>
                <div style={{display:'flex', flexDirection:'row', gap:'1vh'}}>
                    {this.createRow(['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'])}
                </div>
                <div style={{display:'flex', flexDirection:'row', gap:'1vh'}}>
                    {this.createRow(['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'])}
                </div>
                <div style={{display:'flex', flexDirection:'row', gap:'1vh'}}>
                    {this.createRow(['↤', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '←'])}
                </div>
            </div>
        )
    }
}
