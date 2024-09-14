import React, { useEffect, useState } from "react";

import style from "../../styles/Product.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

import { addToCart } from "../../features/cart/cartSlice";
import { useDispatch} from "react-redux";
import { addToFavourites } from "../../features/favourites/favouritesSlice";



export const Product = ({ item }) => {
  const { title, price, images, description, purchased } = item;

  const [currentImage, setCurrentImage] = useState();



  
  const dispatch = useDispatch()
 



  useEffect(() => {
    if (!images.length) return;

    setCurrentImage(images[0]);
  }, [images]);





  return (
    <section className={style.product}>
      <div className={style.images}>
        <div
          className={style.current}
          style={{ backgroundImage: `url(${currentImage})` }}
        />
        <div className={style["images-list"]}>
          {images.map((image, i) => (
            <div
              className={style.image}
              key={i}
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => setCurrentImage(image)}
            />
          ))}
        </div>
      </div>

      <div className={style.info}>
        <h1 className={style.title}>{title}</h1>
        <div className={style.pricesContainer}>
          <div className={style.price}>{price}€</div>
          <div className={style.oldPrice}>{Math.round(price * 1.1)}€</div>
        </div>

        <p className={style.description}>{description}</p>

        <div className={style.actions}>
          <button onClick={() => dispatch(addToCart(item))} className={style.add}>Add to cart</button>
          <button className={style.favourite} onClick={()=>dispatch(addToFavourites(item))}>Add to favourites</button>
        </div>

        <div className={style.bottom}>
          <div className={style.purchase}> {purchased} people purchased</div>
          <Link to={ROUTES.HOME}>Return to store</Link>
        </div>
      </div>
    </section>
  );
};
