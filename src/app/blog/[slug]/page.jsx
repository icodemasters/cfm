import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/20261469/pexels-photo-20261469/free-photo-of-a-view-of-a-restaurant-with-tables-and-chairs-on-a-rainy-day.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avator}
            src="https://images.pexels.com/photos/20261469/pexels-photo-20261469/free-photo-of-a-view-of-a-restaurant-with-tables-and-chairs-on-a-rainy-day.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Gerel-Od Baatar</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.24</span>
          </div>
        </div>
        <div className={styles.content}>
          Excepteur aliqua laborum amet qui sunt culpa minim mollit id. Proident
          adipisicing et ut magna non enim adipisicing ullamco ut laborum minim
          labore excepteur. Minim magna consequat ad irure deserunt incididunt
          reprehenderit mollit qui reprehenderit tempor commodo. Occaecat labore
          minim laborum cillum deserunt nostrud Lorem cupidatat commodo
          consectetur aute veniam sit mollit. Voluptate velit irure deserunt
          velit ea non incididunt. Deserunt veniam nisi deserunt anim nulla
          ullamco non. Aute veniam deserunt exercitation magna adipisicing ea
          consectetur culpa adipisicing. Et ullamco voluptate incididunt
          deserunt aute. Adipisicing est ut elit eu magna deserunt ea. Eu nulla
          ut exercitation labore cupidatat deserunt consequat exercitation
          occaecat excepteur consequat magna commodo sint. Voluptate ea
          exercitation et dolore ipsum sunt non aliqua irure nulla officia. Elit
          irure reprehenderit ea laboris et officia aliquip aliquip. Proident
          dolor ut ad mollit dolore deserunt qui nisi consequat non nostrud
          laboris occaecat. Minim consectetur magna sunt duis deserunt laborum
          in ea excepteur occaecat quis. Labore reprehenderit labore dolor eu
          eiusmod ullamco anim adipisicing ut cillum ipsum Lorem. Sit minim
          aliquip culpa amet aliqua anim dolore elit est labore minim quis
          eiusmod excepteur. Officia veniam duis deserunt voluptate in
          exercitation magna sunt exercitation deserunt. Irure excepteur eu
          exercitation amet dolore. Non ex ad mollit consequat pariatur
          adipisicing non velit laborum id. Ex mollit cillum est cillum ullamco
          labore ea in reprehenderit culpa nisi. Ullamco nostrud in ex nulla
          excepteur enim duis cupidatat irure voluptate ut velit. Laborum
          exercitation minim eiusmod deserunt nulla voluptate duis laborum est
          laboris aliqua officia minim quis. Aliquip ex aliquip ipsum sunt nisi
          consectetur quis eu officia deserunt in. Laboris pariatur ex sunt ad
          do eiusmod mollit. Sunt incididunt eiusmod ad sunt velit excepteur non
          tempor fugiat nulla. Ex nostrud pariatur eu est enim dolore pariatur
          duis nisi ipsum non cupidatat dolore amet. Est sit veniam commodo elit
          sint laborum sint culpa. Voluptate quis occaecat amet mollit. Culpa
          sunt mollit commodo magna culpa excepteur. Elit aliqua dolore
          voluptate sint enim sit adipisicing ad duis ipsum nisi ullamco sint
          consequat. Consequat cillum aute eu excepteur consequat aliqua quis
          duis ullamco. Fugiat exercitation reprehenderit ex pariatur officia
          ipsum proident amet ea aliqua reprehenderit excepteur. Do nulla ut
          velit ipsum duis labore consequat quis ut exercitation reprehenderit.
          Non mollit excepteur et deserunt in aliqua voluptate. Reprehenderit
          duis irure eiusmod veniam nulla et magna sint culpa ut ullamco dolor
          ipsum irure. Aute amet cupidatat fugiat velit eiusmod sit minim fugiat
          ea. Sunt est officia aute et eiusmod aliquip esse eu in proident.
          Aliquip deserunt enim excepteur duis quis. Voluptate quis excepteur
          esse labore aliqua ea laborum incididunt in elit aliquip commodo
          proident commodo. Quis sit cupidatat aute laborum non aliqua magna
          veniam tempor exercitation adipisicing irure cupidatat. Exercitation
          esse consequat nulla ea. Minim id incididunt eu aliquip elit et dolor
          elit. Commodo ut officia et dolor fugiat occaecat. Nisi cupidatat amet
          voluptate amet elit cupidatat aliquip in amet adipisicing amet. Et
          consequat commodo enim consectetur sunt. Exercitation eu aliqua anim
          cillum id cupidatat aliquip mollit consequat. Elit non ullamco ipsum
          aliqua ex enim velit nisi nisi commodo reprehenderit dolore. Ex enim
          pariatur laborum id qui elit labore laboris. Deserunt et nulla sunt ea
          reprehenderit. Consectetur minim esse occaecat tempor in duis. Velit
          labore minim amet ipsum sint adipisicing elit non deserunt non et
          aliqua ad adipisicing. Id ipsum dolore ad Lorem est amet in ad ut do
          mollit non velit tempor. Irure ea officia dolor id quis magna qui
          aliquip qui aliquip ipsum. Minim minim velit ipsum cillum enim nisi
          officia consequat consequat do. Magna fugiat commodo eu pariatur et
          sunt deserunt nostrud fugiat elit voluptate. Sint pariatur cillum nisi
          velit dolor ullamco mollit pariatur fugiat consequat cillum
          reprehenderit. Enim minim do elit et ex. Tempor deserunt non mollit
          officia dolor fugiat occaecat. Et qui mollit anim fugiat cupidatat
          ullamco. Laboris est eiusmod proident dolor excepteur. Occaecat
          pariatur ex veniam id labore esse eiusmod ex aute id. Fugiat nostrud
          non culpa laboris adipisicing. ad.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
