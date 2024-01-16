import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styles from './Header.module.scss'

const Header = () => {

  const [active, setActive] = useState(false);
  
  const { pathname } = useLocation();
  const path = pathname.slice(1);

  const category = ['About', 'Portfolio', 'Skills']
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setActive(!active)
    console.log(active);
  }
  
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
              <a className={active ? `${styles.menu_trigger} ${styles.active}` : styles.menu_trigger} href="#" 
                onClick={(e)=>{handleClick(e)}}>
                <span></span>
                <span></span>
                <span></span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
