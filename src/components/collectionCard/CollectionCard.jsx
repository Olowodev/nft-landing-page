import React from 'react'
import './CollectionCard.css'

const CollectionCard = ({data}) => {
  return (
    <div className='collectionCard'>
      <div className='collectionCardCont'>
        <div className='collectionImg'>
          <img src={data.img} />
        </div>
        <div className='collectionInfo'>
          <div className='colletionLeft'>
            <div className='collectionProfile'>
              <img src={data.profileImg} />
            </div>
            <p>@{data.username}</p>
          </div>
          <p>ERC-20</p>
        </div>
      </div>
    </div>
  )
}

export default CollectionCard