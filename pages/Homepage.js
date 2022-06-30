import Image from "next/image";
import styles from "./Homepage.module.css";
import Appbar from "./components/appBar";

function HomePage() {
  return (
    <div className={styles.body}>
      <Appbar></Appbar>

      <div className={styles.section1}>
        <video className={styles.fullscreen} autoPlay loop muted>
          <source src="./Bioprinting.mp4" type="video/mp4"></source>
        </video>
      </div>

      <div className={styles.section2}>
        <div className={styles.sideLine1}></div>

        <div className={styles.biomaterialsContainer}>
          <div>Native Human Derived Biomaterials </div>
          <span>to Meet your Translational Needs</span>
        </div>
        <div className={styles.sideLine2}></div>

        <div className={styles.imageBar}>
          <Image
            className={styles.circle}
            width={350}
            height={350}
            src="/human-collagen.png"
          ></Image>
          <Image
            className={styles.circle}
            width={350}
            height={350}
            src="/Human-ecm.png"
          ></Image>
          <Image
            className={styles.circle}
            width={350}
            height={350}
            src="/gelatin.png"
          ></Image>
        </div>
      </div>
      <div className={styles.section3}>
        <div className={styles.sideLine3}></div>
        <div className={styles.sideLine4}></div>
        <div className={styles.applications}>
          <div>Applications</div>
        </div>
        <div className={styles.imageBar}>
          <Image
            className={styles.circle}
            width={200}
            height={170}
            src="/bioink.png"
          ></Image>
          <Image
            className={styles.circle}
            width={200}
            height={170}
            src="/tissu-engineering.png"
          ></Image>
          <Image
            className={styles.circle}
            width={200}
            height={170}
            src="/organelles.png"
          ></Image>
          <Image
            className={styles.circle}
            width={200}
            height={170}
            src="/culture.png"
          ></Image>
          <Image
            className={styles.circle}
            width={200}
            height={170}
            src="/3dbio.png"
          ></Image>
        </div>
      </div>
      <div className={styles.section4}>
        <div className={styles.sideLine3}></div>
        <div className={styles.sideLine4}></div>
        <div className={styles.partnerText}>
          <div>Partners</div>
        </div>
        <div className={styles.partnerImage}>
          <Image width={1700} height={500} src="/partners.png"></Image>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
