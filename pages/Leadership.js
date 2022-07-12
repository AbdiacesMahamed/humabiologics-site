import styles from "./Leadership.module.css";
import Image from "next/image";

import Appbar from "./components/appBar";

function Leadership() {
  return (
    <div className={styles.body}>
      <Appbar></Appbar>
      <div>
        <Image src="/leadershipHead.png" height={450} width={1570}></Image>
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
