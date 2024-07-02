import React from 'react'
import Hero from '../Hero/Hero'
import Popular from '../Components/popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollection from '../Components/NewCollection/NewCollection'
import Newsletter from '../Components/Newsletter/Newsletter'

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <Newsletter />
    </div>
  )
}

export default Shop