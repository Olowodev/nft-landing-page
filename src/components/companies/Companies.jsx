import React from 'react'
import coinbase from '../../images/coinbase.png'
import blockchain from '../../images/blockchain.png'
import binance from '../../images/binance.png'
import bitmex from '../../images/bitmex.png'

const Companies = () => {
  return (
    <div>
      <div>
        <div>
          <img src={coinbase} />
        </div>
        <div>
          <img src={blockchain} />
        </div>
        <div>
          <img src={binance} />
        </div>
        <div>
          <img src={bitmex} />
        </div>
      </div>
    </div>
  )
}

export default Companies