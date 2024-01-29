import React, { useEffect, useState } from "react";
import styles from "./About.module.scss";
import Heading from "../../components/Heading";
import AboutData from "./AboutList";

const About = () => {
  const [addClass, setAddClass] = useState<number[]>([]);
  const [career, setCareer] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.preventDefault();

    if (addClass.includes(id)) {
      return setAddClass(addClass.filter((item)=>item !== id));
    }
    setAddClass([...addClass, id]);
  }

  return (
    <article className={styles.about}>
      <Heading
        title="About"
        subTitle="If you should put in the text this will be subTitle Apple Banana"
        emoji="/emojis/heart.png"
      />
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.container}>
            <h2 className={styles.sec_title}>
              <span>Education</span>
            </h2>
            <ul>
              {/* 반복 */}
              {AboutData.map((item) => {
                const { year, details } = item;
                
                return (
                  <li key={year}>
                    <h4 className={styles.year}>
                      <span className={styles.txt}>
                        <span>{year}</span>
                      </span>
                    </h4>
                    <ul className={styles.detail}>
                      <li>
                        <ul className={styles.lists}>

                          {/* 한번 더 반복 */}
                          {
                            details.map((item, idx)=>{
                              const { id, title, content, date } = item;
                              
                              return (
                                <li className={styles.item} key={idx}>
                                  <button onClick={(e)=>handleClick(e, id)}>
                                    <span>
                                      {title} <br /> ({date})
                                    </span>
                                  </button>
                                  <ol>
                                    <li className={addClass.includes(id) ? styles.on : ''}>
                                      <span>
                                        {content.split("^").map((line)=>{
                                          return (
                                            <>
                                              {line}
                                              <br />
                                            </>
                                          )
                                        })}
                                      </span>
                                    </li>
                                  </ol>
                                </li>
                              )
                            })
                          }
                        </ul>
                      </li>
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.container}>
            <h2 className={styles.sec_title}>
              <span>Career</span>
            </h2>
            <ul>
              <li>
                <h4 className={styles.year}>
                  <span className={styles.txt}>
                    <span>2020</span>
                  </span>
                </h4>
                <ul className={styles.detail}>
                  <li>
                    <ul className={styles.lists}>

                      <li className={styles.item}>
                        <button onClick={()=>setCareer(!career)}>
                          <span>
                            ㈜노매드코리아 - 웹디자이너 ↙ <br /> (2020.02 - 2022.12　 
                            <small>
                              2년 11개월
                            </small>
                            )
                          </span>
                        </button>
                        <ol>
                          <li className={career ? styles.on : ''}>
                            <span>
                            - 기획전 배너, 이벤트 페이지, 상세페이지 제작 <br />
                            - 홈페이지 유지 보수 (HTML, CSS 퍼블리싱) <br/>
                            - SNS 마케팅 영상 제작 <br />
                            </span>
                          </li>
                        </ol>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.container}>
            <h2 className={styles.sec_title}>
              <span>Certificate</span>
            </h2>
            <ul>
              <li>
                <h4 className={styles.year}>
                  <span className={styles.txt}>
                    <span>2019</span>
                  </span>
                </h4>
                <ul className={styles.detail}>
                  <li>
                    <ul className={styles.lists}>
                      <li className={styles.item}>
                        <button>
                          <span>
                            GTQ 일러스트 1급<br /> (2019.07 <small>최종합격</small>)
                          </span>
                        </button>
                      </li>
                      <li className={styles.item}>
                        <button>
                          <span>
                            GTQ 포토샵 1급<br /> (2019.06 <small>최종합격</small>)
                          </span>
                        </button>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <h4 className={styles.year}>
                  <span className={styles.txt}>
                    <span>2017</span>
                  </span>
                </h4>
                <ul className={styles.detail}>
                  <li>
                    <ul className={styles.lists}>
                      <li className={styles.item}>
                        <button>
                          <span>
                          Apple Certified Pro Final Cut Pro X (Level Two)<br /> (2017.09 <small>최종합격</small>)
                          </span>
                        </button>
                      </li>
                      <li className={styles.item}>
                        <button>
                          <span>
                          SMAT 서비스경영자격<br /> (2017.08 <small>최종합격</small>)
                          </span>
                        </button>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
};

export default About;
