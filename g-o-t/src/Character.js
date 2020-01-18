import React from 'react';
import {NavLink} from 'react-router-dom'

function Character(props){
    return(
    <NavLink to={`/char/${props.index}`}>{props.got.name}</NavLink>
    )
}


export default Character