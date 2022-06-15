import React from 'react'

const CollectionCard = ({data}) => {
  return (
    <div>
      <div>
        <div>
          <img src={data.img} />
        </div>
        <div>
          <div>
            <div>
              <img src={data.profileImg} />
            </div>
            <p>@{data.username}</p>
          </div>
          <p>ERC-20</p>
        </div>
      </div>
    </div>
  )
}

export default CollectionCard