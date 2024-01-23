import React from 'react'
import styles from './Portfolio.module.scss'
import Heading from '../../components/Heading'

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <Heading
        title="Portfolio"
        subTitle="If you should put in the text this will be subTitle Apple Banana" 
        emoji='/emojis/notebook.png'
      />
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.category_all}>
            <div className={styles.text_box}>
              <p>(04)</p>
              <p>All Project</p>
            </div>
          </div>
          <div className={styles.category_sub}>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio