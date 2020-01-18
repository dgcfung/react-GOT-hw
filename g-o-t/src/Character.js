import React, {useState} from 'react';
import {Route, NavLink} from 'react'

function Character(props){
    console.log(props.got)
    return(
    <div>{props.got.name}</div>
    )
}


export default Character