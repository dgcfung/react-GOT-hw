import React from 'react'
import {NavLink} from 'react-router-dom'

export default function CharDetail(props) {
    console.log(props.match)
    let match = props.match.match.params.index
    let data = props.got[match]
    return (
        <div>
              <p>Name: {data && data.name||data && data.aliases}</p> 
            <p>Gender:{data && data.gender}</p> 
               <p>Born:{data && data.born}</p> 
               <p>Died: {data.died}</p>
         <NavLink to={`/`}>Back</NavLink>
        </div>
    )
}
