import React from 'react'
import logo from '../../images/logo.png'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='navBar'>
      <div className='navContainer'>
        <div>
          <img src={logo} alt='nft logo' />
        </div>
        <div className='rightNav'>
          <div className='navLinks'>
            <a><p>Explore</p></a>
            <a><p>Auctions</p></a>
            <a><p>Collections</p></a>
            <a><p>Creators</p></a>
          </div>
          <div className='navButton'>
              <p>Connect Wallet</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar