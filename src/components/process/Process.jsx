import React from 'react'
import walletIcon from '../../images/walletIcon.png'
import collectIcon from '../../images/collectIcon.png'
import addIcon from '../../images/addIcon.png'
import statIcon from '../../images/statIcon.png'
import './Process.css'

const Process = () => {
  return (
    <div className='process'>
      <div className='processContainer'>
        <h1>How it works</h1>
        <div className='processIllustrations'>
          <div className='processIllus'>
            <div className='illusContainer'>
              <img src={walletIcon} alt='wallet Icon' />
            </div>
            <p>Set Up Your Wallet</p>
          </div>
          <div className='dashLine'></div>
          <div className='processIllus'>
            <div className='illusContainer'>
              <img src={collectIcon} alt='collect Icon'/>
            </div>
            <p>Create Your Collection</p>
          </div>
          <div className='dashLine'></div>
          <div className='processIllus'>
            <div className='illusContainer'>
              <img src={addIcon} alt='add Icon' />
            </div>
            <p>Add Your NFTs</p>
          </div>
          <div className='dashLine'></div>
          <div className='processIllus'>
            <div className='illusContainer'>
              <img src={statIcon}  alt='stat Icon'/>
            </div>
            <p>List Them For Sale</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process