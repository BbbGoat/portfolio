import React, { useState } from "react";
import styles from "./About.module.scss";
import Heading from "../../components/Heading";
import AboutData from "./AboutList";

const About = () => {
  const [click, setClick] = useState(false);

  return (
    <article className={styles.about}>
      <Heading
        title="About"
        subTitle="If you should put in the text this will be subTitle Apple Banana"
        emoji="/emojis/heart.png"
      />
      <section className={styles.sec1}>
        <div className={styles.inner}>
          <div className={styles.press}>
            <h2 className={styles.sec_title}>
              <span>Press</span>
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
                              const { title, content, date } = item;
                              
                              return (
                                <li className={styles.item} key={idx}>
                                  <button>
                                    <span>
                                      {title} <br /> ({date})
                                    </span>
                                  </button>
                                  <ol>
                                    <li className={styles.on}>
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
    </article>
  );
};

export default About;
