import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const category = ['About', 'Portfolio', 'Skills', 'Contact']
  
  return (
    <>
      <header>
        <div>
          {
            category.map((item, idx)=>{
              return (
                <Link to={`/${item.toLowerCase()}`} key={idx}>
                  <span>{item}</span>
                </Link>
              )
            })
          }
        </div>
      </header>
    </>
  );
};

export default Header;
