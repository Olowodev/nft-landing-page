import React from 'react'

const CategoryCard = ({data}) => {
  return (
    <div className="categoryCard">
      <div className='categoryCardCont'>
        <div className='categoryImg'>
          <img src={data.img} />
        </div>
        <div className='categoryProfile'>
          <div className='categoryProfileLeft'>
            <div className='categoryProileImg'>
              <img src={data.profileImg}  />
            </div>
            <div className='categoryInfo'>
              <p>{data.title}</p>
              <p>by @{data.username}</p>
            </div>
          </div>
          <div className='categoryProfileRight'>
            <FaRegHeart />
            <p>{data.likes}</p>
          </div>
        </div>
        <div className='categoryBid'>
          <p>Current Bid</p>
          <p>{data.bid} ETH</p>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard