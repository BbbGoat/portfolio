import React from 'react'
import styles from './Marquee.module.scss'

const Marquee = () => {
  return (
    <div className={styles.marquee}>
        <div className={styles.marquee_inner}>
              <div className={styles.marquee_item}>
                <h4>Welcome to My Porfolio Site</h4>
                {" "}
              </div>
              <div className={styles.marquee_item}>
                <h4>Welcome to My Porfolio Site</h4>
                {" "}
              </div>
            </div>
    </div>
  )
}

export default Marquee