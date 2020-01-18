import React from 'react';
import {NavLink} from 'react-router-dom'

function Character(props){
    return(
    <div>
    <NavLink to={`/char/${props.index}`}>{props.got.name}</NavLink>
    </div>
    )
}
// create links

export default Character