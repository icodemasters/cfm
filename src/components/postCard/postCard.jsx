import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/20261469/pexels-photo-20261469/free-photo-of-a-view-of-a-restaurant-with-tables-and-chairs-on-a-rainy-day.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <div className={styles.title}>Title</div>
        <p className={styles.desc}>
          Commodo dolore labore ex ut nulla dolor est aliquip irure proident.
          Sint irure eiusmod velit mollit mollit ut anim cupidatat culpa elit do
          labore. Aliqua cupidatat deserunt aliqua excepteur sint dolore laboris
          magna magna reprehenderit nulla velit.
        </p>
        <Link className={styles.link} href="/blog/post">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
