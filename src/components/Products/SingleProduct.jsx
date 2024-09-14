import React from 'react'
import data from '../../data/dataBase.json'

import { useParams  } from 'react-router-dom';
import { Product } from './Product';
import { Products } from './Products';

export const SingleProduct = () => {

  const { id } = useParams();

  let arr = []
  let relatedArr = []
  let cat = ''
  data.map((item)=>{
    
    if(item.id === Number(id)){
      arr.push(item)
      cat = item.category
    }
  })

  data.map((item)=>{
    // eslint-disable-next-line eqeqeq
    if(item.category == cat && item.id != id) {
      relatedArr.push(item)
      
    }
  })


 


  return (
    <>
      <Product item={arr[0]}/>
      <Products products={relatedArr} amount={4} title="Related"/>
    </>
  )
}
