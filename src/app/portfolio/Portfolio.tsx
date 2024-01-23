import React from 'react'
import styles from './Portfolio.module.scss'
import Heading from '../../components/Heading'
import { Link } from 'react-router-dom'

const projectList = [
  {
    id: 1,
    name: 'CJ 그룹',
    stack: 'React / Node.js / asdfasdf',
    url: '',
  },
  {
    id: 2,
    name: 'Aesop',
    stack: '',
    url: '',
  },
  {
    id: 3,
    name: 'Studio App',
    stack: '',
    url: '',
  },
  {
    id: 4,
    name: 'DCode Shop',
    stack: '',
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
            projectList.sort((a,b)=> b.id - a.id).map((item)=>{
              const { id, name, url, stack } = item;
              
              return (
                <Link to={url} key={id} target='_blank'>
                  <div className={styles.sub_tab}>
                    <div className={styles.text_box}>
                      <div className={styles.flex}>
                        <p>0{id}</p>
                        <p>{name}</p>
                      </div>
                      <div className={styles.flex}>
                        {/* Marqee로 만들 부분!!! */}
                        <div className={`${styles.stack} ${styles.marquee}`}>
                          <div>{stack}</div>
                          <div>{stack}</div>
                          <div>{stack}</div>
                          <div>{stack}</div>
                        </div>
                        <div className={styles.arrow}>
                          {'>'}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            }) 
          }
          
        </div>
      </div>
    </section>
  )
}

export default Portfolio