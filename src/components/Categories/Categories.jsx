import React from 'react'

import style from "../../styles/Categories.module.css";
import { Link } from 'react-router-dom';

import Gaming from '../../images/categories/Gaming.webp'
import Shoes from '../../images/categories/Shoes.webp'
import Skate from '../../images/categories/Skate.jpg'
import Phones from '../../images/categories/Phones.jpg'
import Audio from '../../images/categories/Audio.webp'

export const Categories = ({title}) => {


  return (
    <section className={style.section}>
        <h2>{title}</h2>

        <div className={style.list}>
            <Link to={`/categories/Gaming`} key="Gaming" className={style.item}>
                <div className={style.image} style={{backgroundImage: `url(${Gaming})`}} />
                <h3 className={style.title}>Gaming</h3>
            </Link>

            <Link to={`/categories/Shoes`} key="Shoes" className={style.item}>
                <div className={style.image} style={{backgroundImage: `url(${Shoes})`}} />
                <h3 className={style.title}>Shoes</h3>
            </Link>

            <Link to={`/categories/Skate`} key="Skate" className={style.item}>
                <div className={style.image} style={{backgroundImage: `url(${Skate})`}} />
                <h3 className={style.title}>Skate</h3>
            </Link>

            <Link to={`/categories/Phones`} key="Phones" className={style.item}>
                <div className={style.image} style={{backgroundImage: `url(${Phones})`}} />
                <h3 className={style.title}>Phones</h3>
            </Link>
            <Link to={`/categories/Audio`} key="Audio" className={style.item}>
                <div className={style.image} style={{backgroundImage: `url(${Audio})`}} />
                <h3 className={style.title}>Audio</h3>
            </Link>
        </div>
    </section>
  )
}
