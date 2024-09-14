import React from 'react'
import { Link } from 'react-router-dom'


import style from '../../styles/Products.module.css'

export const Products = ({title, products = [], amount }) => {

    const list = products.filter((_, i) => i < amount)

  return (
    <section className={style.products}>
        {title && <h2>{title}</h2>}

        <div className={style.list}>
            {list.map(({ id, images, title, category, price, purchased }) =>(

                <Link to={`/products/${id}`} key={id} className={style.product}>
                    <div >
                        <img src={images[0]} className={style.image} alt="" />
                    </div>

                    <div className={style.wrapper}>
                        <h3 className={style.title}>{title}</h3>
                        <div className={style.cat}>{category}</div>

                        <div className={style.info}>
                            <div className={style.prices}>
                                <div className={style.price}>{price}€</div>
                                <div className={style.oldPrice}>{Math.round(price * 1.1)}€</div>
                            </div>

                            <div className={style.purchases}>{purchased} purchased</div>
                        </div>
                    </div>  
                </Link> 

            ))}
        </div>
    </section>
  )
}
