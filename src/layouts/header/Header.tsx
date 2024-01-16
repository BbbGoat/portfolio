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
      <header className={active ? `${styles.header} ${styles.active}` : styles.header}>
        <div className={styles.wrap}>
          <div className={styles.inner}>
            <div className={styles.logo}>
              <h1>BBBGOAT</h1>
            </div>
            <div className={styles.category}>
              <ul className={styles.pc_list}>
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
              {/* 햄버거 버튼 */}
              <a 
                className={active ? `${styles.menu_trigger} ${styles.active}` : styles.menu_trigger} 
                href="#" 
                onClick={(e)=>{handleClick(e)}}>
                <span></span>
                <span></span>
                <span></span>
              </a>
            </div>
          </div>
        </div>
        {/* 모바일용 ul */}
        <ul className={active ? `${styles.m_list} ${styles.active}` : styles.m_list}>
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
      </header>
    </>
  );
};

export default Header;
