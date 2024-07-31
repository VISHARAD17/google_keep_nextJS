import React from 'react'

const Note = ({title, content, tags}) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>{ content }</p>
        <div>
            <ul>
                {tags.map((tag:string) => { <li>{tag}</li> })}
            </ul>
        </div>
     </div>
  )
}

export default Note
