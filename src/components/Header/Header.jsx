import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

import LOGO from "../../images/logo.svg";
import AVATAR from "../../images/avatar.jpg";

import style from '../../styles/Header.module.css'
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../../features/products/productsSlice";



export const Header = () => {

  const cartItems = useSelector((state) => state.cart.cart)
  const favouritesItems = useSelector((state) => state.favourites.favourites)

  console.log(favouritesItems);

  const dispatch = useDispatch()

  const handleSearch = (event) =>{
    dispatch(setSearchQuery(event.target.value))
  }


  const products = useSelector((state)=> state.products.products);
  const searchQuery = useSelector((state)=> state.products.searchQuery.toLowerCase())
  

  /* if(searchQuery===''){
    return null
  } */

  const filteredProducts = products.filter((product)=>
    product.title.toLowerCase().includes(searchQuery) ||
    product.description.toLowerCase().includes(searchQuery)
  );


  return (
    <header>

      <div className={style.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="logo" />
        </Link>
      </div>
      
      <div className={style.info}>

        <form className={style.form}>
          <div className={style.icon}>
            <svg className="icon">
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
            </svg>
          </div>

          <div className={style.input}>
            <input type="text" name="search" placeholder="Search for anything" autoComplete="off" onChange={handleSearch}  />
          </div>

          {filteredProducts.length > 0  ? (
            <div className={searchQuery==='' ? style.emptyBox : style.box} >
              {filteredProducts.map((product)=>(
                
                <Link key={product.id} className={style.item} to={`products/${product.id}`}>
                  <div className={style.image} style={{ backgroundImage: `url(${product.images[0]})` }}></div>
                  <div className={style.title}>{product.title}</div>
                </Link>
                
              ))}
            </div>
          
          ):(
            <div className={style.box}>
              No products found
            </div>
            
          ) }

        </form>

        <div className={style.user}>
          <div
            className={style.avatar}
            style={{ backgroundImage: `url(${AVATAR})` }}
          />
          <div className={style.username}>Guest</div>
        </div>
        
        <div className={style.account}>

          <Link to={ROUTES.FAVOURITES} className={style.favourites}>
            <svg className={style["icon-fav"]} >
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
            </svg>
            {!!favouritesItems.length &&  <span className={style.count}>{favouritesItems.length}</span>}
          </Link>

          <Link to={ROUTES.CART} className={style.cart}>
            <svg className={style["icon-cart"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
            </svg>
            {!!cartItems.length &&  <span className={style.count}>{cartItems.length}</span>}
            
          </Link>
          
        </div>



      </div>
    

    </header>
  );
};
