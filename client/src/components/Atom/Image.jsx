import React from "react";

export default function Image(props) {

    return(
        <img src={props.imageBG} alt={props.text} style={{ width: '100%', height: 'auto' }} />
    )
}