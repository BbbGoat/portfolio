import React, { useState } from 'react'
import styles from './Skills.module.scss'
import Heading from '../../components/Heading'
import ChartComp from '../../components/ChartComp'

const Skills = () => {

  const [chart, setChart] = useState(false);
  
  return (
    <div className={styles.skills}>
      <Heading
        title="Skills"
        emoji='/emojis/shine.png'
      />
      <article className={styles.content}>

        <section className={styles.section}>
          <div className={styles.null}>
            <button onClick={()=>{setChart(!chart)}}>클릭</button>
          </div>

          <div className={styles.inner}>
            <div className={styles.container}>
              <h2 className={styles.title}>
                <span>Develop</span>
              </h2>
              <ul>
                {/* 반복 */}
                <li>
                  <h3 className={styles.cat}>
                    <span>프레임워크</span>
                  </h3>
                  <ul className={styles.list}>
                    {/* 반복 */}
                    <li>
                      <button className={styles.btn}>
                        <span>React</span>
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className={chart ? `${styles.chart} ${styles.on}` : styles.chart}>
            {
              chart ? (<ChartComp />) : <></>
            }
          </div>
        </section>
      </article>
    </div>
  )
}

export default Skills