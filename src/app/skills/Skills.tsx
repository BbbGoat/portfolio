import React from 'react'
import styles from './Skills.module.scss'
import Heading from '../../components/Heading'

const Skills = () => {
  return (
    <section className={styles.skills}>
      <Heading
        title="Skills"
        emoji='/emojis/shine.png'
      />
      <div className={styles.content}>
        <div className={styles.container}>
          여기부터는 섹션별 메인 콘텐츠가 들어갑니다! 
        </div>
      </div>
    </section>
  )
}

export default Skills