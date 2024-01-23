import React from 'react'
import styles from './Portfolio.module.scss'
import Heading from '../../components/Heading'
import { Link } from 'react-router-dom'

const list = [
  {
    id: 1,
    name: '',
    url: '',
  },
]

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
          <div className={styles.main_tab}>
            <div className={styles.text_box}>
              <p>(04)</p>
              <p>All Project</p>
            </div>
          </div>
          {
            // 맵돌릴거유
            
          }
          <Link to={'/'}>
            <div className={styles.sub_tab}>
              <div className={styles.text_box}>
                <p>04</p>
                <p>DCode Shop</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Portfolio