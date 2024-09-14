import React from 'react'

import data from '../../data/dataBase.json'

import { Products } from '../Products/Products'
import {Poster} from '../Poster/Poster'
import { Categories } from '../Categories/Categories'
import { Banner } from '../Banner/Banner'


export const Home = () => {

  let lessThan100 = []
  data.map((item)=>{
    if(item.price < 100){
      lessThan100.push(item)
    }
  })

  

  return (
    <>
      <Poster/>
      <Products products={data} amount={4} title="Trending"/>
      <Categories title="Worth to see"/>
      <Banner />
      <Products products={lessThan100} amount={4} title="Less than 100€"/>
    </>
  )
}

export default Home