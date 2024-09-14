import React from 'react'

import style from "../../styles/Sidebar.module.css";
import { Link } from 'react-router-dom';




export const Sidebar = () => {
  return (
    <section className={style.sidebar}>
      <div className={style.title}>CATEGORIES</div>

      <nav>
        <ul className={style.menu}>
          <li>
            <Link to={`/categories/Phones`} className={style.link}>Phones</Link>
          </li>
          <li>
            <Link to={`/categories/Gaming`}  className={style.link}>Gaming</Link>
          </li>
          <li>
            <Link to={`/categories/Furniture`} className={style.link}>Furniture</Link>
          </li>
          <li>
            <Link to={`/categories/Audio`} className={style.link}>Audio</Link>
          </li>
          <li>
            <Link to={`/categories/Shoes`} className={style.link}>Shoes</Link>
          </li>
          <li>
            <Link to={`/categories/Skate`} className={style.link}>Skate</Link>
          </li>
          <li>
            <Link to={`/categories/Miscellaneous`} className={style.link}>Miscellaneous</Link>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Sidebar