import React from 'react'
import '../CSS/RadioComponents.css'
import { slots } from '../Mlist';

const RadioComponents = ({text}) => {
  return (
    <div className='form-check-label'>
      <span className='text'>{text}</span>
    </div>
  )
}

export default RadioComponents
