import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import style from "../../styles/Cart.module.css";
import { incrementQuantity, decrementQuantity, removeFromCart } from '../../features/cart/cartSlice';
import { PurchaseRefusalModal } from '../Modal/PurchaseRefusalModal';
import { Link } from 'react-router-dom';

const sumBy = (arr) =>arr.reduce((prev,cur) => prev + cur, 0)

export const Cart = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart.cart)

    const [isModalOpen, setModalOpen] = useState(false)
    const openModal = () => setModalOpen(true)
    const closeModal = () =>setModalOpen(false)

    
  
  return (
    <section className={style.cart}>
      <h2 className={style.title}>Your Cart</h2>

      {!cartItems.length ? (
        <div className={style.empty}>Here is empty</div>
      ):(
        <>
            <div className={style.list}>
                {cartItems.map((item)=>{
                    const { title, category, images, price, id, quantity} = item

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


                            <div className={style.quantity}>

                                <div className={style.minus} onClick={()=> dispatch(decrementQuantity(item.id))}>
                                    <svg className="icon">
                                        <use
                                            xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#minus`}
                                        />
                                    </svg>
                                </div>

                                <span>{quantity}</span>

                                <div className={style.plus} onClick={()=> dispatch(incrementQuantity(item.id))}>
                                    <svg className="icon">
                                        <use
                                            xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#plus`}
                                        />
                                    </svg>
                                </div>
                            </div>

                            <div className={style.total}>{price * quantity}€</div>

                            <div className={style.close} onClick={() => dispatch(removeFromCart(item.id))}>
                                <svg className="icon">
                                    <use
                                        xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`}
                                    />
                                </svg>
                            </div>
                        </div>
                        
                    )
                })}
            </div>

            <div className={style.actions}>
                <div className={style.total}>
                    TOTAL PRICE: {" "}
                    <span>
                        {sumBy(cartItems.map(({quantity, price})=> quantity * price))}€
                    </span>
                </div>
                <button className={style.proceed} onClick={openModal}>Proceed to checkout</button>
                <PurchaseRefusalModal isOpen={isModalOpen} onClose={closeModal}>
                    <h2 className={style.modalHeading}>This site was made for educational purposes.</h2>
                    <p>product payment process not added</p>
                </PurchaseRefusalModal>
            </div>
        </>
      )}
    </section>
  )
}
