import React from 'react'
import { collection } from '../../data'
import {FaArrowCircleRight} from 'react-icons/fa'
import CollectionCard from '../collectionCard/CollectionCard'

const Collections = () => {
  return (
    <div>
      <div>
        <h1>Popular Collections</h1>
        <div>
          <FaArrowCircleRight />
          {collection.map((collect, index) => (
            <CollectionCard  key={index} data={collect}/>
          ))}
        </div>
        <Button text="View All" border color="#fff" bgColor="transparent" />
      </div>
    </div>
  )
}

export default Collections