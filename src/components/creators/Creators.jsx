import React from 'react'
import CreatorCard from '../creatorCard/CreatorCard'
import { creators } from '../../data'
import Button from '../button/Button'
import './Creators.css'

const Creators = () => {
  return (
    <div className='creators'>
      <div className='creatorsCont'>
        <h1>Top Creators</h1>
        <div className='creatorCards'>
          {creators.map((creator, index) => (
            <CreatorCard  key={index} data={creator}/>
          ))}
        </div>
        <div className='creatorsButton'>
          <Button text="View All" border color="#fff" bgColor="transparent" />
        </div>
      </div>
    </div>
  )
}

export default Creators