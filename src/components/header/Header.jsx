import React from 'react'
import HeaderImg from '../../images/headerImg.png'
import Button from '../button/Button'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='headerContainer'>
        <div className='leftHeader'>
          <h1>Explore, Buy and Sell the <span>Best NFTs!</span></h1>
          <div className='leftHeadButtons'>
            <Button text="Explore" bgColor="#ffce4e" color="#000" />
            <Button text="Create" bgColor="#e9d7a710" color="#fff" border />
          </div>
          <div className='achievements'>
            <div className='achievement'>
              <h3>32k+</h3>
              <p>Artworks</p>
            </div>
            <div className='achievement'>
              <h3>20k+</h3>
              <p>Auctions</p>
            </div>
            <div className='achievement'>
              <h3>12k+</h3>
              <p>Creators</p>
            </div>
          </div>
        </div>
        <div className='rightHeader'>
          <div className='absolute'></div>
          <div className='heroImg'>
            <img src={HeaderImg} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header