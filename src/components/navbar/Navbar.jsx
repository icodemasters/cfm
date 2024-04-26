import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import Image from "next/image";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { CiInstagram, CiLinkedin } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <a
          target="_blank"
          href="https://www.facebook.com"
          rel="noopener noreferrer">
          <CiFacebook size="1.5em" color="var(--text)" />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com"
          rel="noopener noreferrer">
          <CiInstagram size="1.5em" color="var(--text)" />
        </a>
        <Link href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <CiLinkedin size="1.5em" color="var(--text)" />
        </Link>
        <Link href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <CiTwitter size="1.5em" color="var(--text)" />
        </Link>
        <Link href="https://www.youtube.com" target="_blank" rel="noreferrer">
          <FaYoutube size="1.5em" color="var(--text)" />
        </Link>
      </div>
      <Link href="/" className={styles.logo}>
        Лого
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
