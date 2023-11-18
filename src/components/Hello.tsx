import React, { FC } from 'react'
interface Props {
    text: string;
    color: string;
    backgroundColor: string;

}


export const Hello: FC<Props> = ({ text, color, backgroundColor }) => {
    
    const textStyle = {
        color: color,
        backgroundColor: backgroundColor
    }
    return (
        <div style={textStyle}>
            {text}
        </div>
    )
}
