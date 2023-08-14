import Header from "@/components/Header";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div id="home" className={styles.homeWrapper}>
      <Header />
      <div className={styles.introduction}>
        <h1 className={styles.description}>Delivery</h1>
      </div>
    </div>
  );
};

export default Home;
