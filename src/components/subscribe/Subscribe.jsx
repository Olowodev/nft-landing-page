import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
  return (
    <div className='subscribe'>
      <div className='subscribeContainer'>
        <h1>Ready for Next NFT Drop?</h1>
        <div className='subInput'>
          <input placeholder='info@gmail.com' />
          <div className='subButton'>
            <p>Subscribe</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe