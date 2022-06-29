import styles from "./Leadership.module.css";
import Image from "next/image";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function Leadership() {
  return (
    <div className={styles.body}>
      <Header></Header>
      <div className={styles.line1}></div>
      <div className={styles.top}>
        <Navbar></Navbar>
      </div>
      <div>
        <Image src="/leadershipHead.png" height={500} width={1570}></Image>
      </div>

      <div>
        <Image src="/Leader.png" height={500} width={500}></Image>
      </div>
      <div className={styles.textContainer}>
        <span className={styles.topText}>Mohammad Albanna, PHD</span>
        <span className={styles.bottomText}>Founder and CEO</span>
      </div>
    </div>
  );
}

export default Leadership;
