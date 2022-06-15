import React from 'react'
import AuctionCard from '../auctionCard/AuctionCard'
import { auction } from '../../data'
import Button from '../button/Button'
import {FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

const Auctions = () => {
  return (
    <div className='auctions'>
      <div className='auctionsCont'>
        <h1 className='autionTitle'>Live Auctions</h1>
        <div className='auctionNav'>
          <div className='navIcons'>
            <FaArrowCircleLeft />
            <FaArrowCircleRight />
          </div>
        </div>
        <div className='auctionCards'>
          {auction.map((auc, index) => (
            <AuctionCard  key={index} data={auc}/>
          ))}
        </div>
        <Button text="View All" border color="#fff" bgColor="transparent" />
      </div>
    </div>
  )
}

export default Auctions