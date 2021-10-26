import React from 'react'

const EditExpensePage=(props)=>{
    console.log(props)
    return (
        <div>
            <p>Editing the page with ID of {props.match.params.id}</p>
        </div>
    )
}
export default EditExpensePage