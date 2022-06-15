import React from 'react'
import { categories } from '../../data'
import CategoryCard from '../categoryCard/CategoryCard'

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
        <Button text="View All" border color="#fff" bgColor="transparent" />
      </div>
    </div>
  )
}

export default Categories