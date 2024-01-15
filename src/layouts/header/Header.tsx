import React from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.scss'

const Header = () => {

  const category = ['About', 'Portfolio', 'Skills']
  
  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrap}>
          <div className={styles.logo}>
            <h1>BBBGOAT</h1>
          </div>
          <div className={styles.category}>
            <ul>
              {
                category.map((item, idx)=>{
                  return (
                    <li key={idx}>
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
      </header>
    </>
  );
};

export default Header;
