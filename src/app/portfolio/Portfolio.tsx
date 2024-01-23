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
          여기부터는 섹션별 메인 콘텐츠가 들어갑니다! 
        </div>
      </div>
    </section>
  )
}

export default Portfolio