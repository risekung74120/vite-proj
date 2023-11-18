import React, { FC } from 'react'
interface Props {
    text: string;
    color: string;
    backgroundColor: string;
    textadd: string;
    num: Number;

}


export const Comadd: FC<Props> = ({ text, textadd, num, color, backgroundColor }) => {
    
    const textStyle = {
        color: color,
        backgroundColor: backgroundColor
    }
    return (
        <div style={textStyle}>
            {text}
            {textadd}
        </div>
    )
}
