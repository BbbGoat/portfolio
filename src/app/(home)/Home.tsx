import React, { useEffect, useState } from 'react'
import styles from './Home.module.scss'
import Marquee from '../../components/Marquee'

export default function Home() {

  const [vidUrl, setVidUrl] = useState('');
  
  const handleEnter = (vidName: string) => {
    setVidUrl(vidName)
    // console.log('들어옴!', vidUrl);
  }

  // 확인용 구간 ///////////////
  useEffect(()=>{
    console.log(vidUrl)
  }, [vidUrl])
  
  return (
    <section className={styles.home}>
      <div>Home</div>
      <div className={styles.main}>
        {/* 비디오 섹션 */}
        <div className={vidUrl === 'project_1' ? `${styles.bg} ${styles.on}` : styles.bg}>
          <div className={styles.video}>
            <video src={`/images/project_1.mp4`} autoPlay loop muted></video>
          </div>
        </div>
        <div className={vidUrl === 'project_2' ? `${styles.bg} ${styles.on}` : styles.bg}>
          <div className={styles.video}>
            <video src="/images/project_2.mp4" autoPlay loop muted></video>
          </div>
        </div>
        <div className={vidUrl === 'project_3' ? `${styles.bg} ${styles.on}` : styles.bg}>
          <div className={styles.video}>
            <video src="/images/project_3.mp4" autoPlay loop muted></video>
          </div>
        </div>
        <div className={vidUrl === 'project_4' ? `${styles.bg} ${styles.on}` : styles.bg}>
          <div className={styles.video}>
            <video src="/images/project_4.mp4" autoPlay loop muted></video>
          </div>
        </div>
        {/* 컨텐츠 섹션 */}
        
        <div className={styles.content}>
          <div className={styles.linear}>
            <Marquee />
          </div>


          <div className={styles.text_box}>
            <div className={styles.wrapper}>

              <div className={styles.circle}>
                <div className={styles.circle_inner}>
                  <a className={styles.text_group} href="#">
                    <span className={styles.top_txt}>(1st)</span>
                    <span className={styles.bottom_txt}>CJ</span>
                  </a>
                </div>
              </div>
              <div className={styles.circle}>
                <div className={styles.circle_inner}>
                  <a className={styles.text_group} href="#">
                    <span className={styles.top_txt}>(2nd)</span>
                    <span className={styles.bottom_txt}>Aesop</span>
                  </a>
                </div>
              </div>
              <div className={styles.circle}>
                <div className={styles.circle_inner}>
                  <a className={styles.text_group} href="#">
                    <span className={styles.top_txt}>(3rd)</span>
                    <span className={styles.bottom_txt}>Studio</span>
                  </a>
                </div>
              </div>
              <div className={styles.circle}>
                <div className={styles.circle_inner}>
                  <a className={styles.text_group} href="#">
                    <span className={styles.top_txt}>(4th)</span>
                    <span className={styles.bottom_txt}>Dcode</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          
          <div className={styles.circle_box}>
            <div className={styles.wrapper}>

              <div className={styles.circle} 
                onMouseEnter={()=>{handleEnter('project_1')}}
                onMouseLeave={()=>setVidUrl('')}
              >
                <div className={styles.circle_inner}></div>
              </div>
              <div className={styles.circle} 
                onMouseEnter={()=>{handleEnter('project_2')}}
                onMouseLeave={()=>setVidUrl('')}
              >
                <div className={styles.circle_inner}></div>
              </div>
              <div className={styles.circle}
                onMouseEnter={()=>{handleEnter('project_3')}}
                onMouseLeave={()=>setVidUrl('')} 
              >
                <div className={styles.circle_inner}></div>
              </div>
              <div className={styles.circle}
                onMouseEnter={()=>{handleEnter('project_4')}}
                onMouseLeave={()=>setVidUrl('')}
              >
                <div className={styles.circle_inner}></div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}