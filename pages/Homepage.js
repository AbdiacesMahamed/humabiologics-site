import Image from "next/image";
import styles from "./Homepage.module.css";
import Appbar from "./components/appBar";
import Slider from "./components/slider";
import Footer from "./components/footer";
// https://humabiologics.sanity.studio/desk

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
            alt="collagen"
          ></Image>
          <Image
            className={styles.circle1}
            width={350}
            height={350}
            src="/Human-ecm.png"
            alt="ecm"
          ></Image>
          <Image
            className={styles.circle3}
            width={350}
            height={340}
            src="/gelatin4.png"
            alt="geletin"
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
            alt="bioink"
          ></Image>
          <Image
            className={styles.circle}
            width={200}
            height={170}
            src="/tissu-engineering.png"
            alt="tissue"
          ></Image>
          <Image
            className={styles.circle}
            width={200}
            height={170}
            src="/organelles.png"
            alt="organelles"
          ></Image>
          <Image
            className={styles.circle}
            width={200}
            height={170}
            src="/culture.png"
            alt="src"
          ></Image>
          <Image
            className={styles.circle}
            width={200}
            height={170}
            src="/3dbio.png"
            alt="3d"
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
          <Image
            width={1700}
            height={500}
            src="/partners.png"
            alt="partner"
          ></Image>
        </div>
      </div>
      <div className={styles.section5}>
        <span className={styles.trusted}> Trusted by</span>
        <span className={styles.trusted2}>Industry Leaders</span>
        <div className={styles.sideLine5}></div>
        <div className={styles.sideLine6}></div>
        <Slider></Slider>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default HomePage;
