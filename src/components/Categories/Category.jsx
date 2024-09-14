/* eslint-disable array-callback-return */
import React from 'react'

import data from '../../data/dataBase.json'

import style from "../../styles/Category.module.css";
import { Products } from '../Products/Products';

export const Category = ({type}) => {

    let newArr = []

    data.map((item) => {
        if(item.category === type){
            newArr.push(item)
            
        }
    })

    console.log(newArr);



  return (
    <section className={style.wrapper}>
        <h2 className={style.title}>{type}</h2>
        <Products title="" products={newArr} amount={newArr.length} />
    </section>
  )
}
