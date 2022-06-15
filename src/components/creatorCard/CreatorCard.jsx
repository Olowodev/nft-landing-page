import React from 'react'

const CreatorCard = ({data}) => {
  return (
    <div>
      <div>
        <div>
          <img src={data.img} />
        </div>
        <div>
          <p>Wzard Dee</p>
          <p>4.89 ETH</p>
        </div>
        <div></div>
        <div>
          <p>33</p>
          <p>Items</p>
        </div>
      </div>
    </div>
  )
}

export default CreatorCard