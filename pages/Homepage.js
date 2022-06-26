import Navbar from "./components/Navbar";
import styles from "./Homepage.module.css";
import Header from "./components/Header";

function HomePage() {
  return (
    <div className={styles.body}>
      <Header></Header>
      <div className={styles.line1}></div>
      <div className={styles.top}>
        <Navbar></Navbar>
      </div>

      <div className={styles.section1}>
        <video className={styles.fullscreen} autoPlay loop muted>
          <source src="./Bioprinting.mp4" type="video/mp4"></source>
        </video>
      </div>

      <div className={styles.section2}>
        <div className={styles.sideLine1}></div>

        <div className={styles.biomaterialsContainer}>
          <div>
            Native Human Derived Biomaterials to Meet your Translational Needs
          </div>
        </div>
        <div className={styles.sideLine2}></div>

        <div className={styles.imageBar}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
