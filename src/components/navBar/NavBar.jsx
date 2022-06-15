import React from 'react'
import logo from '../../images/logo.png'

const NavBar = () => {
  return (
    <div>
      <div>
        <div>
          <img src={logo} alt='nft logo' />
        </div>
        <div>
          <div>
            <a><p>Explore</p></a>
            <a><p>Auctions</p></a>
            <a><p>Collections</p></a>
            <a><p>Creators</p></a>
          </div>
          <div>
            <div>
              <p>Connect Wallet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar