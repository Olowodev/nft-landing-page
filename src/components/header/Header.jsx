import React from 'react'
import HeaderImg from '../../images/headerImg.png'
import Button from '../button/Button'

const Header = () => {
  return (
    <div>
      <div>
        <div>
          <h1>Explore, Buy and Sell the Best NFTs!</h1>
          <div>
            <Button text="Explore" bgColor="#ffce4e" color="#000" />
            <Button text="Create" bgColor="#e9d7a710" color="#fff" border />
          </div>
          <div>
            <div>
              <h3>32k+</h3>
              <p>Artworks</p>
            </div>
            <div>
              <h3>20k+</h3>
              <p>Auctions</p>
            </div>
            <div>
              <h3>12k+</h3>
              <p>Creators</p>
            </div>
          </div>
        </div>
        <div>
          <div></div>
          <div>
            <img src={HeaderImg} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header