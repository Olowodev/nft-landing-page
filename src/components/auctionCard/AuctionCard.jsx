import React from 'react'
import {FaRegHeart} from 'react-icons/fa'
import './AuctionCard.css'

const AuctionCard = ({data}) => {
  return (
    <div className='auctionCard'>
      <div className='auctionCardCont'>
        <div className='auctionImg'>
          <img className='test' src={data.img} />
          <div className='auctionAbsolute'>
            <p>{data.hours}:{data.minutes}:{data.seconds}</p>
          </div>
        </div>
        <div className='auctionProfile'>
          <div className='auctionLeft'>
            <div className='auctionProfileImg'>
              <img src={data.profileImg} />
            </div>
            <div className='auctionInfo'>
              <p>{data.title}</p>
              <p>by {data.username}</p>
            </div>
          </div>
          <div className='auctionRight'>
            <FaRegHeart style={{fontSize: "28px"}} />
            <p>{data.likes}</p>
          </div>
        </div>
        <div className='auctionBid'>
          <p>Current Bid</p>
          <p>{data.bid} ETH</p>
        </div>
        <div className='auctionButton'>
          <p>Place a bid</p>
        </div>
      </div>
    </div>
  )
}

export default AuctionCard