import React from 'react'

export default function CharDetail(props) {
    console.log(props.match)
    let match = props.match.match.params.index
    let data = props.got[match]
    return (
        <div>
            {data && data.name}
        </div>
    )
}
