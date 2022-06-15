import React from 'react'
import CreatorCard from '../creatorCard/CreatorCard'
import { creators } from '../../data'

const Creators = () => {
  return (
    <div>
      <div>
        <h1>Top Creators</h1>
        <div>
          {creators.map((creator, index) => (
            <CreatorCard  key={index} data={creator}/>
          ))}
        </div>
        <Button text="View All" border color="#fff" bgColor="transparent" />
      </div>
    </div>
  )
}

export default Creators