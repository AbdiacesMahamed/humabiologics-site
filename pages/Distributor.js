import styles from "./Distributor.module.css";
import Image from "next/image";
import Navbar from "./components/Navbar";

import Header from "./components/Header";

function Distributor() {
  return (
    <div className={styles.body}>
      <Header></Header>
      <div className={styles.line1}></div>
      <div className={styles.top}>
        <Navbar></Navbar>
      </div>
      <div>
        <Image src="/distributor.png" height={700} width={1570}></Image>
      </div>
      <div className={styles.right}>
        <Image src="/europe.png" height={350} width={1570}></Image>
      </div>
      <div className={styles.asia}>
        <Image src="/asia.png" height={350} width={1570}></Image>
      </div>
    </div>
  );
}

export default Distributor;
