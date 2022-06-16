import React from 'react'
import { FaTwitter, FaYoutube, FaFacebookF, FaGooglePlusG} from 'react-icons/fa'
import logo from '../../images/logo.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerContainer'>
        <div className='footSection'>
          <div className='footLogo'>
            <img src={logo} />
          </div>
          <div className='footSubSection'>
            <p>Nec, enim sed lacus, magna pharetra. Phasellus tincidunt nulla pharetra gravida est. </p>
            <div>
              <FaYoutube />
              <FaTwitter />
              <FaFacebookF />
              <FaGooglePlusG />
            </div>
            <p>All rights reserved@2021</p>
          </div>
        </div>
        <div className='footLinks'>
          <h3>About Us</h3>
          <p>About NFTs</p>
          <p>Live Auctions</p>
          <p>NFT Blog</p>
          <p>Activity</p>
        </div>
        <div  className='footLinks'>
          <h3>Support</h3>
          <p>Help &26; Support</p>
          <p>Item Details</p>
          <p>Author Profile</p>
          <p>Collection</p>
        </div>
      </div>
    </div>
  )
}

export default Footer