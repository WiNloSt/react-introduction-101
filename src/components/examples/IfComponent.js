import React from 'react'

const IfComponent = ({ number }) => {
  let component
  // number = 2
  if (number % 2 === 0)
    component = <span>It's an even number!!!</span>
  else
    component = <span>It's an odd number!!!</span>
  return (
    <div>
      {component}
    </div>
)}

export default IfComponent
