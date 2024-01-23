import React from "react";
import styles from "./About.module.scss";
import Heading from "../../components/Heading";

const About = () => {
  return (
    <section className={styles.about}>
      <Heading title="About" subTitle="If you should put in the text this will be subTitle Apple Banana" />
      <div>
        
      </div>
    </section>
  );
};

export default About;
