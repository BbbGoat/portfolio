import React, { useEffect, useState } from "react";
import styles from "./Details.module.scss";
import { useParams } from "react-router-dom";
import DetailsData from "./DetailsData";
import classNames from "classnames";

const Details = () => {

  const { id } = useParams();
  const data = DetailsData[Number(id) - 1];

  const [count, setCount] = useState(0);

  

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

  }
  
  return (
    <article className={styles.details}>
      <div className={styles.wrap}>
        <section className={styles.section1}>
          <div className={styles.text_box}>
            {
              data.title.split('^').map((txt, idx)=>{
                return (
                  <h2 key={idx}>
                    <span>{txt}</span>
                  </h2>
                )
              })
            }
            <div className={styles.sub}>
              <span>{data.order.toUpperCase()}</span>
            </div>
            <div className={styles.p_box}>
              {
                data.subTitle.split('^').map((txt, idx)=>{
                  return (
                    <p key={idx}>
                      <span>{txt}</span>
                    </p>
                  )
                })
              }
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
            <button className={styles.title} onClick={(e)=>{handleClick(e)}}>
              <div className={styles.wrap}>
                <span>
                  <span className={styles.num}>(0{data.id})</span>
                  <h2>
                    <span className={styles.txt}>
                      {data.name}
                    </span>
                  </h2>
                </span>
              </div>
            </button>
            <div className={styles.stack}>
              <h3>Tech</h3>
              <ul className={styles.stack_list}>
                {
                  data.stack.map((list, idx) => {
                    return (
                      <li key={idx}>
                        <button>
                          <span>
                            <a href="">
                              {list}
                            </a>
                          </span>
                        </button>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className={styles.snap}>
              <h3>Snap</h3>
              <div className={styles.img_list}>
                <ul>
                  {/* 반복 */}
                  {
                    data.img.map((url,idx)=>{

                      return (
                        <li 
                          className={classNames(styles.item, styles.type)}
                          key={idx}
                        >
                          {idx+1}
                          !!!
                          <img src={url} alt="미리보기 이미지" />
                        </li>
                      )

                    })
                  }
                </ul>
              </div>
            </div>
            <div className={styles.desc}>
              <h3>Desc</h3>
              <span>{data.desc}</span>
            </div>
          </div>
        </section>
        <div className={styles.bottom}>
          <div className={styles.next}>
              <a href="">
            <div className={styles.inner}>
                <span className={styles.txt}>Prev Project</span>
                <span className={styles.icon}>go</span>
            </div>
              </a>
          </div>
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
