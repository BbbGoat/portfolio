import React from 'react'
import styles from './Portfolio.module.scss'
import Heading from '../../components/Heading'
import { Link } from 'react-router-dom'

const projectList = [
  {
    id: 1,
    order: '1st Portfolio',
    title: 'Vanilla Javascript Project^Responsive sites^CJ Group',
    subTitle: '새로운 경험을 창출하는 의미있는 순간과 감도있는^라이프스타일을 통해 긍정적인 이슈들을 만듭니다.^이런 새로운 비즈니스들을 통해 지속가능하고^좋은 경제에 대한 새로운 기준을 만들고 있습니다.',
    name: 'CJ 그룹',
    stack: 'HTML5 / CSS3 / Javascript',
    url: 'https://bbbgoat.github.io/FED-PJ-WBS-SAEM/CJ/index.html',
  },
  {
    id: 2,
    order: '2nd Portfolio',
    title: 'Vue.js Project^Minimal Shop app^Aesop',
    subTitle: '',
    name: 'Aesop',
    stack: 'Vue.js / Vuex / Javscript / JQuery',
    url: 'https://bbbgoat.github.io/Aesop/main/index.html',
  },
  {
    id: 3,
    order: '3rd Portfolio',
    title: 'React Project^Interactive Art site^Studio-app',
    subTitle: '',
    name: 'Studio App',
    stack: 'React / Redux / three.js / Javascript / JQuery ',
    url: 'https://bbbgoat.github.io/Studio-app/',
  },
  {
    id: 4,
    order: '4th Portfolio',
    title: 'Next.js Project^e-commerce shopping mall^Dcode-app',
    subTitle: '',
    name: 'Dcode Shop',
    stack: 'Next.js / Typescript / Firebase / Vercel',
    url: 'https://react-next-dcode-app.vercel.app/',
  },
]

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
            projectList.sort((a,b)=> b.id - a.id).map((item)=>{
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