import React from 'react'
import AuctionCard from '../auctionCard/AuctionCard'
import { auction } from '../../data'
import Button from '../button/Button'
import {FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import './Auctions.css'

const Auctions = () => {
  return (
    <div className='auctions'>
      <div className='auctionsCont'>
        <h1 className='auctionTitle'>Live Auctions</h1>
        <div className='auctionNav'>
          <div className='navIcons'>
            <FaArrowCircleLeft  style={{ color: "#f5fbf2", fontSize: "54px"}} />
            <FaArrowCircleRight style={{ color: "#f5fbf2", fontSize: "54px"}} />
          </div>
        </div>
        <div className='auctionCards'>
          {auction.map((auc, index) => (
            <AuctionCard  key={index} data={auc}/>
          ))}
        </div>
        <div className='auctionsButton'>
          <Button text="View All" border color="#fff" bgColor="transparent" />
        </div>
      </div>
    </div>
  )
}

export default Auctions