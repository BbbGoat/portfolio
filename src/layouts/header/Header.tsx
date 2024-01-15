import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styles from './Header.module.scss'

const Header = () => {

  const { pathname } = useLocation();
  const path = pathname.slice(1);

  const category = ['About', 'Portfolio', 'Skills']
  
  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrap}>
          <div className={styles.inner}>
            <div className={styles.logo}>
              <h1>BBBGOAT</h1>
            </div>
            <div className={styles.category}>
              <ul>
                {
                  category.map((item, idx)=>{
                    return (
                      <li key={idx} className={path === item.toLowerCase() ? styles.active : ''}>
                        <Link to={`/${item.toLowerCase()}`}>
                          <span>{item}</span>
                        </Link>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;