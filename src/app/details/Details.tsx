import React from 'react'
import styles from './Details.module.scss'

const Details = () => {
  return (
    <section className={styles.details}>
      <div className={styles.wrap}>
        <div className={styles.text_box}>
          <h2>1ST Project CJ 그룹</h2>
          <p>portfolio</p>
          <div>
            <span>
              새로운 경험을 창출하는 의미있는 순간과 감도있는
              라이프스타일을 통해 긍정적인 이슈들을 만듭니다.
              이런 새로운 비즈니스들을 통해 지속가능하고
              좋은 경제에 대한 새로운 기준을 만들고 있습니다
            </span>
          </div>
        </div>
        <article>
          여기는 내용 들어갈 부분
        </article>
      </div>
    </section>
  )
}

export default Details