import React from "react";
import styles from "./Details.module.scss";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  
  return (
    <article className={styles.details}>
      <div className={styles.wrap}>

        <section className={styles.section1}>
          <div className={styles.text_box}>
            <h2>
              <span>1st Project CJ 그룹</span>
            </h2>
            <h2>
              <span>CJ 그룹</span>
            </h2>
            <div className={styles.sub}>
              <span>portfolio</span>
            </div>
            <div className={styles.p_box}>
              <p>
                <span>새로운 경험을 창출하는 의미있는 순간과 감도있는</span>
              </p>
              <p>
                <span>라이프스타일을 통해 긍정적인 이슈들을 만듭니다.</span>
              </p>
              <p>
                <span>이런 새로운 비즈니스들을 통해 지속가능하고</span>
              </p>
              <p>
                <span>좋은 경제에 대한 새로운 기준을 만들고 있습니다.</span>
              </p>
            </div>
          </div>
          <div className={styles.video_box}>
            <div className={styles.video}>
              <video src={`/images/project_${id}.mp4`}></video>
            </div>
          </div>
        </section>
        <section className={styles.section2}>
          <div className={styles.content}>
            <button className={styles.title}>
              <div className={styles.wrap} onClick={()=>{}}>
                <span>
                  <span className={styles.num}>(01)</span>
                  <h2>
                    <span className={styles.txt}>
                      Creative
                    </span>
                  </h2>
                </span>
              </div>
            </button>
            <div className={styles.stack}>
              <h3>Tech</h3>
              <ul className={styles.stack_list}>
                {/* 반복 */}
                <li>
                  <button>
                    <span>
                      <a href="">
                        ALL
                      </a>
                    </span>
                  </button>
                </li>
                <li>
                  <button>
                    <span>
                      <a href="">
                        React
                      </a>
                    </span>
                  </button>
                </li>
              </ul>
            </div>
            <div className={styles.snap}>
              <h3>Snap</h3>
              <div className={styles.img_list}>
                <ul>
                  {/* 반복 */}
                  <li className={`${styles.item} ${styles.type1}`}>
                    <div>
                      <img src="/images/mok1.jpg" alt="" />
                    </div>
                  </li>
                  <li className={`${styles.item} ${styles.type2}`}>
                    <div>
                      <img src="/images/mok2.jpg" alt="" />
                    </div>
                  </li>
                  <li className={`${styles.item} ${styles.type3}`}>
                    <div>
                      <img src="/images/mok3.jpg" alt="" />
                    </div>
                  </li>
                  <li className={`${styles.item} ${styles.type1}`}>
                    <img src="/images/mok4.jpg" alt="" />
                  </li>
                  <li className={`${styles.item} ${styles.type2}`}>
                    <img src="/images/mok1.jpg" alt="" />
                  </li>
                  <li className={`${styles.item} ${styles.type3}`}>
                    <img src="/images/mok2.jpg" alt="" />
                  </li>
                  <li className={`${styles.item} ${styles.type1}`}>
                    <img src="/images/mok2.jpg" alt="" />
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.desc}>
              <h3>Desc</h3>
              <span>desc sdakljf fjkwkemv m kljfwelkf mklwfm welfm mewlk mjfwmlef wefkmf me ewkmlf mkwewfm weklfmwle mwlekfm wlkfm welmf lwex.dfvjiojui3qwmk xc  wemf xcjfow memlkvmweoimv w lsd fowe jfwaf jwem xcjvnopiwa wej fsdji vwoie jvkcxvlxzkjopwieur jcxnv weijdsf sfweiof ckxjxlisuejr,szdz;zaslksdjdswmw  eemmeme sososemem sosoem,w, ememe me nwev</span>
            </div>
          </div>
        </section>
        <div className={styles.bottom}>
          <div className={styles.next}>
              <a href="">
            <div className={styles.inner}>
                <span className={styles.txt}>Next Project</span>
                <span className={styles.icon}>go</span>
            </div>
              </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Details;
