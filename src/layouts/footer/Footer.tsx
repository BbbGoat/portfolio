import React from "react";
import styles from "./Footer.module.scss";
import { AiFillGithub } from "react-icons/ai";
import { SiVelog } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <div className={styles.inner}>
            <div className={styles.left}>
              <div className={styles.text_box}>
                <p>Welcome.</p>
                <span>포트폴리오 아카이브</span>
              </div>
              <div className={styles.text_box}>
                <p>Mail.</p>
                <div>
                  <span>oomi9421@gmail.com</span>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.text_box}>
                <p>Github.</p>
                <div>
                  <a href="https://github.com/BbbGoat" target="_blank">
                    <AiFillGithub size={20} />
                    <span>BbbGoat</span>
                  </a>
                </div>
              </div>
              <div className={styles.text_box}>
                <p>Velog.</p>
                <div>
                  <a href="https://velog.io/@bbbgoat/posts" target="_blank">
                    <SiVelog size={20} />
                    <span>BbbGoat</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
