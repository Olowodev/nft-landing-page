import React from 'react'
import walletIcon from '../../images/walletIcon.png'
import collectIcon from '../../images/collectIcon.png'
import addIcon from '../../images/addIcon.png'
import statIcon from '../..images/statIcon.png'

const Process = () => {
  return (
    <div className='process'>
      <div className='processContainer'>
        <h1>How it works</h1>
        <div className='processIllustrations'>
          <div className='processIllus'>
            <div className='illusContainer'>
              <img src={walletIcon} />
            </div>
            <p>Set Up Your Wallet</p>
          </div>
          <div className='dashLine'></div>
          <div className='processIllus'>
            <div className='illusContainer'>
              <img src={collectIcon} />
            </div>
            <p>Create Your Collection</p>
          </div>
          <div className='dashLine'></div>
          <div className='processIllus'>
            <div className='illusContainer'>
              <img src={addIcon} />
            </div>
            <p>Add Your NFTs</p>
          </div>
          <div className='dashLine'></div>
          <div className='processIllus'>
            <div className='illusContainer'>
              <img src={statIcon} />
            </div>
            <p>List Them For Sale</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process