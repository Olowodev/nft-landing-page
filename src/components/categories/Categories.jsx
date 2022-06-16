import React from 'react'
import { categories } from '../../data'
import CategoryCard from '../categoryCard/CategoryCard'
import Button from '../button/Button'
import './Categories.css'

const Categories = () => {
  return (
    <div className='categories'>
      <div className='categoriesCont'>
        <h1 className='categoryTitle'>Explore By Categories</h1>
        <div className='categoryCards'>
          {categories.map((category, index) => (
            <CategoryCard  key={index} data={category}/>
          ))}
        </div>
        <div className='categoryButton'>
          <Button text="View All" border color="#fff" bgColor="transparent" />
        </div>
      </div>
    </div>
  )
}

export default Categories