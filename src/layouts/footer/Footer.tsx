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
                <p>엥</p>
                <span>우에엥</span>
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
                  <AiFillGithub size={20} />
                  <span>BbbGoat</span>
                </div>
              </div>
              <div className={styles.text_box}>
                <p>Velog.</p>
                <div>
                  <SiVelog size={20} />
                  <span>BbbGoat</span>
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
