import React, { FC } from 'react'

interface Props{

    listname:string[]
}

export const Addname:FC<Props> = ({ listname}) => {
    return (
        <div>
            {
                listname.map((list) => {
                    return <li>{list}</li>
                }
                )
            }

        </div>
    )
}
