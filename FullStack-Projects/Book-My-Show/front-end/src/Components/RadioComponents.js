import React from 'react'
import '../CSS/RadioComponents.css'

const RadioComponents = ({text}) => {
  return (
    <div className='form-check-label'>
      <span className='text'>{text}</span>
    </div>
  )
}

export default RadioComponents
