import React from "react";
import styles from "./About.module.scss";
import Heading from "../../components/Heading";

const About = () => {
  return (
    <section className={styles.about}>
      <Heading 
        title="About"
        subTitle="If you should put in the text this will be subTitle Apple Banana" 
        emoji="/emojis/heart.png"
      />
      <div className={styles.content}>
        <div className={styles.container}>
          여기부터는 섹션별 메인 콘텐츠가 들어갑니다! 
        </div>
      </div>
    </section>
  );
};

export default About;
