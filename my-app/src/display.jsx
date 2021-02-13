import React from 'react'

export default function display(props) {
    return (
        <div>
            {props.data.map((item) =>
                <div>
                    <h3 onClick={props.onClick}>{item.character}</h3>
                    <p>{item.unicodeName}</p>
                </div>
            )}

        </div>
    )
}
