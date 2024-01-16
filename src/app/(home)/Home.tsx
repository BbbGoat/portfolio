import React from 'react'
import styles from './Home.module.scss'

export default function Home() {
  return (
    <section className={styles.home}>
      <div>Home</div>
      <div className={styles.main}>
        {/* 비디오 섹션 */}
        <div className={`${styles.bg} ${styles.circle}`}>
          <div className={styles.video}>
            <video src="/images/project_1.mp4" autoPlay loop muted></video>
          </div>
        </div>
        {/* 컨텐츠 섹션 */}
        
        <div className={styles.content}>
          <div className={styles.linear}>Welcome to My Porfolio Site</div>
          
          <div className={styles.circle_box}>
            <div className={styles.wrapper}>

              <div className={styles.circle}>
                <div className={styles.circle_inner}></div>
              </div>
              <div className={styles.circle}>
                <div className={styles.circle_inner}></div>
              </div>
              <div className={styles.circle}>
                <div className={styles.circle_inner}></div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}