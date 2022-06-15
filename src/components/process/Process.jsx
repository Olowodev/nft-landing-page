import React from 'react'
import walletIcon from '../../images/walletIcon.png'
import collectIcon from '../../images/collectIcon.png'
import addIcon from '../../images/addIcon.png'
import statIcon from '../..images/statIcon.png'

const Process = () => {
  return (
    <div>
      <div>
        <h1>How it works</h1>
        <div>
          <div>
            <div>
              <img src={walletIcon} />
            </div>
            <p>Set Up Your Wallet</p>
          </div>
          <div></div>
          <div>
            <div>
              <img src={collectIcon} />
            </div>
            <p>Create Your Collection</p>
          </div>
          <div></div>
          <div>
            <div>
              <img src={addIcon} />
            </div>
            <p>Add Your NFTs</p>
          </div>
          <div></div>
          <div>
            <div>
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