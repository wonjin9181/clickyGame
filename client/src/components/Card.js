import React from 'react'


export default function Card(props) {
    return (
        <div>
            <img src={props.url} alt="logo" onClick={() => props.clicked(props.id)}/>
        </div>
    )
}
