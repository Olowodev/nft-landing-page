import React from 'react'
import { collection } from '../../data'
import {FaArrowCircleRight} from 'react-icons/fa'
import CollectionCard from '../collectionCard/CollectionCard'
import Button from '../button/Button'
import './Collections.css'

const Collections = () => {
  return (
    <div className='collections'>
      <div className='collectionsCont'>
        <h1 className='collectionsTitle'>Popular Collections</h1>
        <div className='collectionCards'>
          {/*<FaArrowCircleRight />*/}
          {collection.map((collect, index) => (
            <CollectionCard  key={index} data={collect}/>
          ))}
        </div>
        <div className='collectionsButton'>
          <Button text="View All" border color="#fff" bgColor="transparent" />
        </div>
      </div>
    </div>
  )
}

export default Collections