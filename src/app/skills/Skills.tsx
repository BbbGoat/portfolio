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
          내용 들어갈 부분
        </div>
      </div>
    </section>
  )
}

export default Skills