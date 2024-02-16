import React from 'react'
import styles from './Portfolio.module.scss'
import Heading from '../../components/Heading'
import { Link } from 'react-router-dom'
import DetailsData from '../details/DetailsData'

const Portfolio = () => {
  return (
    <article className={styles.portfolio}>
      <Heading
        title="Portfolio"
        emoji='/emojis/notebook.png'
      />
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.main_tab}>
            <div className={styles.text_box}>
              <p>💻</p>
              <p>FED Project</p>
            </div>
          </div>
          {
            DetailsData.sort((a,b)=> b.id - a.id).map((item)=>{
              const { id, name, url, stack } = item;
              
              return (
                <div className={styles.sub_tab} key={id}>
                  <Link to={`/details/${id}`}>
                    <div className={styles.text_box}>
                      <div className={`${styles.flex} ${styles.move_ani}`}>
                        <p>(0{id})</p>
                        <p>{name}</p>
                      </div>
                      <div className={styles.flex}>
                        {/* Marqee로 만들 부분!!! */}
                        <div className={styles.stack}>
                          <div className={styles.marquee}>
                            <div className={styles.marquee_inner}>
                              <div className={styles.marquee_item}>
                                <h4>{stack}</h4>
                              </div>
                              <div className={styles.marquee_item}>
                                <h4>{stack}</h4>
                              </div>
                              <div className={styles.marquee_item}>
                                <h4>{stack}</h4>
                              </div>
                              <div className={styles.marquee_item}>
                                <h4>{stack}</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.arrow}>
                          <img src="/images/arrow_right_1.5x.png" alt="바로가기" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            }) 
          }
          
        </div>
      </section>
      {/* 디자인 */}
      {/* <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.main_tab}>
            <div className={styles.text_box}>
              <p>🎨</p>
              <p>Web Design</p>
            </div>
          </div>
        </div>
      </section> */}
      {/* 영상 */}
      {/* <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.main_tab}>
            <div className={styles.text_box}>
              <p>🎬</p>
              <p>Video production</p>
            </div>
          </div>
        </div>
      </section> */}
    </article>
  )
}

export default Portfolio