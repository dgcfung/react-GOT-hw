import React from 'react'
import {NavLink} from 'react-router-dom'

export default function CharDetail(props) {
    console.log(props.match)
    let match = props.match.match.params.index
    let data = props.got[match]
    return (
        <div>
                {data && data.name||data && data.aliases}
                {data && data.gender}
         <NavLink to={`/`}>Back</NavLink>
        </div>
    )
}
