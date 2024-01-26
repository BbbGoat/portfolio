import React from "react";
import styles from "./About.module.scss";
import Heading from "../../components/Heading";

const About = () => {
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
              <li>
                <h4 className={styles.year}>
                  <span className={styles.txt}>
                    <span>2023</span>
                  </span>
                </h4>
                <ul className={styles.detail}>
                  <li>
                    <ul className={styles.lists}>
                      <li className={styles.item}>
                        <button>
                          <span>Sodssd jSod mEj jcmek <br/> Wef mlkd fWmnvl</span>
                        </button>
                        <p>
                          추가 내용 추가 내용
                        </p>
                      </li>
                      <li className={styles.item}>
                        <button>
                          <span>Sodssd jSod mEj jcmek <br/> Wef mlkd fWmnvl</span>
                        </button>
                        <p>
                          추가 내용 추가 내용
                        </p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              {/* 임시로 반복! */}
              <li>
                <h4 className={styles.year}>
                  <span className={styles.txt}>
                    <span>2023</span>
                  </span>
                </h4>
                <ul className={styles.detail}>
                  <li>
                    <ul className={styles.lists}>
                      <li className={styles.item}>
                        <button>
                          <span>Sodssd jSod mEj jcmek <br/> Wef mlkd fWmnvl</span>
                        </button>
                        <p>
                          추가 내용 추가 내용
                        </p>
                      </li>
                      <li className={styles.item}>
                        <button>
                          <span>Sodssd jSod mEj jcmek <br/> Wef mlkd fWmnvl</span>
                        </button>
                        <p>
                          추가 내용 추가 내용
                        </p>
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
