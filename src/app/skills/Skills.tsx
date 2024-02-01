import React from 'react'
import styles from './Skills.module.scss'
import Heading from '../../components/Heading'
import ChartComp from '../../components/ChartComp'

const Skills = () => {
  return (
    <article className={styles.skills}>
      <Heading
        title="Skills"
        emoji='/emojis/shine.png'
      />
      <section className={styles.section}>
        <div>
          <ChartComp />
        </div>
      </section>
    </article>
  )
}

export default Skills