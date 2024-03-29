import React, { useEffect, useState } from 'react'
import styles from './Home.module.scss'
import Marquee from '../../components/Marquee'
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const [vidUrl, setVidUrl] = useState('');
  
  const handleEnter = (vidName: string) => {
    setVidUrl(vidName);
  }

  const navigate = useNavigate();

  
  return (
    <section className={styles.home}>
      <div className={styles.main}>
        {/* 비디오 섹션 */}
        <div className={vidUrl === 'vid1' ? `${styles.bg} ${styles.on}` : styles.bg}>
          <div className={styles.video}>
            <video src={`/images/project_1.mp4`} autoPlay loop muted></video>
          </div>
        </div>
        <div className={vidUrl === 'vid2' ? `${styles.bg} ${styles.on}` : styles.bg}>
          <div className={styles.video}>
            <video src="/images/project_2.mp4" autoPlay loop muted></video>
          </div>
        </div>
        <div className={vidUrl === 'vid3' ? `${styles.bg} ${styles.on}` : styles.bg}>
          <div className={styles.video}>
            <video src="/images/project_3.mp4" autoPlay loop muted></video>
          </div>
        </div>
        <div className={vidUrl === 'vid4' ? `${styles.bg} ${styles.on}` : styles.bg}>
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
                onMouseEnter={()=>{handleEnter('vid1')}}
                onMouseLeave={()=>setVidUrl('')}
                onClick={()=>navigate('/details/1')}
              >
                <div className={styles.circle_inner}></div>
              </div>
              <div className={styles.circle} 
                onMouseEnter={()=>{handleEnter('vid2')}}
                onMouseLeave={()=>setVidUrl('')}
                onClick={()=>navigate('/details/2')}
              >
                <div className={styles.circle_inner}></div>
              </div>
              <div className={styles.circle}
                onMouseEnter={()=>{handleEnter('vid3')}}
                onMouseLeave={()=>setVidUrl('')} 
                onClick={()=>navigate('/details/3')}
              >
                <div className={styles.circle_inner}></div>
              </div>
              <div className={styles.circle}
                onMouseEnter={()=>{handleEnter('vid4')}}
                onMouseLeave={()=>setVidUrl('')}
                onClick={()=>navigate('/details/4')}
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