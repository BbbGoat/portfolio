import React from 'react'
import styles from './Home.module.scss'
import Marquee from '../../components/Marquee'

export default function Home() {
  return (
    <section className={styles.home}>
      <div>Home</div>
      <div className={styles.main}>
        {/* 비디오 섹션 */}
        <div className={`${styles.bg} ${styles.circle}`}>
          <div className={styles.video}>
            <video src="/images/project_1.mp4" loop muted></video>
          </div>
        </div>
        {/* 컨텐츠 섹션 */}
        
        <div className={styles.content}>
          <div className={styles.linear}>
            <Marquee />
          </div>
          
          <div className={styles.circle_box}>
            <div className={styles.wrapper}>

              <div className={styles.circle}>
                <div className={styles.circle_inner}>
                  <a className={styles.text_box} href="#">
                    <span className={styles.top_txt}>(1st)</span>
                    <span className={styles.bottom_txt}>CJ</span>
                  </a>
                </div>
              </div>
              
              <div className={styles.circle}>
                <div className={styles.circle_inner}>
                  <a className={styles.text_box} href="#">
                    <span className={styles.top_txt}>(2st)</span>
                    <span className={styles.bottom_txt}>Aesop</span>
                  </a>
                </div>
              </div>
              
              <div className={styles.circle}>
                <div className={styles.circle_inner}>
                  <a className={styles.text_box} href="#">
                    <span className={styles.top_txt}>(3st)</span>
                    <span className={styles.bottom_txt}>Studio</span>
                  </a>
                </div>
              </div>

              <div className={styles.circle}>
                <div className={styles.circle_inner}>
                  <a className={styles.text_box} href="#">
                    <span className={styles.top_txt}>(4st)</span>
                    <span className={styles.bottom_txt}>Dcode</span>
                  </a>
                </div>
              </div>
              

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}