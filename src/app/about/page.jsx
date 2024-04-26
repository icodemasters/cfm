import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {
  // console.log("lets check where it works")
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>Бидний тухай</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.desc}>
          The CFS team is led by Mark Lanterman, a former U.S. Secret Service
          Electronic Crimes Taskforce member and the current Chief Technology
          Officer of CFS. CFS has extensive experience in working with state
          agencies. Most of CFS’ personnel are former state/federal law
          enforcement or from high-profile private entities. Therefore, CFS is
          well equipped to address the specific challenges associated with
          investigations that would be presented by a variety of clients. More
          specifically, CFS has a unique ability to relay complex technical
          findings in a manner that can easily be understood, both in-court and
          in written testimony. CFS prides itself on providing comprehensive
          findings at the conclusion of each matter, a procedure that has proven
          to be highly valued by our clients. CFS has the capability to analyze
          other digital evidence repositories, such as cloud storage databases,
          digital video recorders, GPS devices, tablets and cell phones, as well
          as social media evidence (Facebook, Twitter, etc.).
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About Image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
