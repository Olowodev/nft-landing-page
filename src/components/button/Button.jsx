import React from 'react'

const Button = ({text, bgColor, border, color}) => {
  return (
    <div>
      <div className='button' style={{ backgroundColor: bgColor, border: border ? "1px solid #ffce4e" : null, color: color}}>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Button