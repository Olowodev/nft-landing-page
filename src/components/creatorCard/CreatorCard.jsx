import React from 'react'

const CreatorCard = ({data}) => {
  return (
    <div className='creatorCard'>
      <div className='creatorCardCont'>
        <div className='creatorProfile'>
          <img src={data.img} />
        </div>
        <div className='creatorInfo'>
          <p>Wzard Dee</p>
          <p>4.89 ETH</p>
        </div>
        <div className='vline'></div>
        <div className='creationCount'>
          <p>33</p>
          <p>Items</p>
        </div>
      </div>
    </div>
  )
}

export default CreatorCard