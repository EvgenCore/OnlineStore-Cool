import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


import style from "../../styles/Favourites.module.css";

import { removeFromFavourites } from '../../features/favourites/favouritesSlice';
import { Link } from 'react-router-dom';

export const Favourites = () => {
    const dispatch = useDispatch()
    const favouritesItems = useSelector((state) => state.favourites.favourites)
 

  return (
    <section className={style.favourites}>
        <h2 className={style.title}>Your Favourites</h2>

        {!favouritesItems.length ? (
            <div className={style.empty}>Here is empty</div>
        ):(
            <>
                <div className={style.list}>
                    {favouritesItems.map((item)=>{
                        const { title, category, images, price, id} = item

                        return (
                            <div className={style.item} key={id}>
                               
                                <div
                                    className={style.image}
                                    style={{ backgroundImage: `url(${images[0]})` }}
                                />
                                 <Link to={`/products/${id}`}>
                                    <div className={style.info}>
                                        <h3 className={style.name}>{title}</h3>
                                        <div className={style.category}>{category}</div>
                                    </div>
                                </Link>
                                <div className={style.price}>{price}€</div>
                                
                                
                                <button onClick={() => dispatch(removeFromFavourites(item.id))} className={style.removeBtn}>Remove from Favourites</button>
                               
                            </div>
                        )
                    })}
                </div>
            </>
        )}
    </section>
  )
}
