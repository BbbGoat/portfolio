import React, { useState } from 'react'
import styles from './Skills.module.scss'
import Heading from '../../components/Heading'
import ChartComp from '../../components/ChartComp'
import { TechList, DesignList } from './SkillList'
import { designData, frontData, serverData } from './ChartData'

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
                {
                  TechList.map((item, idx) => {
                    const { title, list } = item;
                    return (      
                      <li key={idx}>
                        <h3 className={styles.cat}>
                          <span>{title}</span>
                        </h3>
                        <ul className={styles.list}>
                          {/* 반복 */}
                          {
                            list.map((item, idx) => {
                              return (
                                <li key={idx}>
                                  <button className={styles.btn}>
                                    <span>{item}</span>
                                  </button>
                                </li>
                              )
                            })
                          }
                        </ul>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>

          <div className={chart ? `${styles.chart} ${styles.on}` : styles.chart}>
            <div className={styles.grid}>
              {
                chart ? (
                  <>
                    <div className={styles.empty}></div>
                    <div className={styles.wrap}>
                      <ChartComp 
                        text={frontData.text}
                        labels={frontData.name}
                        data={frontData.num}
                        // bgc='rgba(229, 229, 229, 1)'
                        bgc='rgba(223, 241, 225, 1)' 
                      />
                      <ChartComp 
                        text={serverData.text}
                        labels={serverData.name}
                        data={serverData.num}
                        bgc='rgba(251, 241, 211, 1)'
                      />
                    </div>
                  </>
                ) : <></>
              }
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.null}>
            <button onClick={()=>{setChart(!chart)}}>클릭</button>
          </div>

          <div className={styles.inner}>
            <div className={styles.container}>
              <h2 className={styles.title}>
                <span>Design</span>
              </h2>
              <ul>
                {/* 반복 */}
                {
                  DesignList.map((item, idx) => {
                    const { title, list } = item;
                    return (      
                      <li key={idx}>
                        <h3 className={styles.cat}>
                          <span>{title}</span>
                        </h3>
                        <ul className={styles.list}>
                          {/* 반복 */}
                          {
                            list.map((item, idx) => {
                              return (
                                <li key={idx}>
                                  <button className={styles.btn}>
                                    <span>{item}</span>
                                  </button>
                                </li>
                              )
                            })
                          }
                        </ul>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>

          <div className={chart ? `${styles.chart} ${styles.on}` : styles.chart}>
            <div className={styles.grid}>
              {
                chart ? (
                  <>
                    <div className={styles.empty}></div>
                    <div className={styles.wrap} >
                      <ChartComp 
                        text={designData.text}
                        labels={designData.name}
                        data={designData.num}
                        bgc='rgba(209, 209, 209, .5)'
                      />
                    </div>
                  </>
                ) : <></>
              }
            </div>
          </div>
        </section>
      </article>
    </div>
  )
}

export default Skills