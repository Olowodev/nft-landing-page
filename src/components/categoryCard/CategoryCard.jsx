import React from 'react'

const CategoryCard = ({data}) => {
  return (
    <div>
      <div>
        <div>
          <img src={data.img} />
        </div>
        <div>
          <div>
            <div>
              <img src={data.profileImg}  />
            </div>
            <div>
              <p>{data.title}</p>
              <p>by @{data.username}</p>
            </div>
          </div>
          <div>
            <FaRegHeart />
            <p>{data.likes}</p>
          </div>
        </div>
        <div>
          <p>Current Bid</p>
          <p>{data.bid} ETH</p>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard