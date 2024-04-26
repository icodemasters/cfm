import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.logo}>Cyberforensics</div> */}
      <div className={styles.text}>Cyberforensics © All rights reserved.</div>
      <div className={styles.icons}>
        <Image src="/facebook.png" alt="facebook" width={18} height={18} />
        <Image src="/instagram.png" alt="instagram" width={18} height={18} />
        <Image src="/linkedin.png" alt="linkedin" width={18} height={18} />
        <Image src="/twitter.png" alt="twitter.png" width={18} height={18} />
        <Image src="/youtube.png" alt="youtube" width={18} height={18} />
      </div>
    </div>
  );
};

export default Footer;
