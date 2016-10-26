import React from 'react'

export default function(props) {
  return (
    <div>
      <h1>My list!!!</h1>
      <ul>
        {
          // props.list = ['One', 'Two', 'Three']
          props.list.map((item, index) =>
            <li key={index} >{item}</li>
          )
        }
      </ul>
    </div>
  )
}
