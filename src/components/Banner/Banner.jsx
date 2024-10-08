import React from 'react'

import style from "../../styles/Home.module.css"

import bannerImg from "../../images/halloween.jpg"
import { Link } from 'react-router-dom'

export const Banner = () => (
    <section className={style.banner}>
        <div className={style.left}>
            <p className={style.content}>HALLOWEEN<span>SALE</span></p>
            <Link to={'/categories/Gaming'}><button className={style.more}>See more</button></Link>
        </div>
        <div className={style.right} style={{backgroundImage: `url(${bannerImg})`}}>
            <p className={style.discount}>SAVE UP TO <span>50%</span> OFF</p>
        </div>
    </section>
)


