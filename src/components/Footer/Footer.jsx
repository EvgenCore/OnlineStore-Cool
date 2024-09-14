import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

import LOGO from "../../images/logo.svg";
import style from "../../styles/Footer.module.css";

export const Footer = () => {
  return (
    <section className={style.footer}>
      <div className={style.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="logo" />
        </Link>
      </div>

      <div className={style.rights}>
        This site was made for educational purposes.
      </div>

      <div className={style.socials}>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <svg className={style["icon-fav"]} >
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
          </svg>
        </a>

        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <svg className={style["icon-fav"]} >
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
          </svg>
        </a>

        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <svg className={style["icon-fav"]} >
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
          </svg>
        </a>
      </div>

    </section>
  );
};
