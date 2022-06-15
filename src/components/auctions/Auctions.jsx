import React from 'react'
import AuctionCard from '../auctionCard/AuctionCard'
import { auction } from '../../data'
import Button from '../button/Button'
import {FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

const Auctions = () => {
  return (
    <div>
      <div>
        <h1>Live Auctions</h1>
        <div>
          <div>
            <FaArrowCircleLeft />
            <FaArrowCircleRight />
          </div>
        </div>
        <div>
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