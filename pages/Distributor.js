import styles from "./Distributor.module.css";
import Image from "next/image";
import Appbar from "./components/appBar";

function Distributor() {
  return (
    <div className={styles.body}>
      <Appbar></Appbar>
      <div>
        <Image
          src="/distributor.png"
          alt="header"
          height={700}
          width={1570}
        ></Image>
      </div>
      <div className={styles.right}>
        <Image src="/europe.png" alt="europe" height={350} width={1570}></Image>
      </div>
      <div className={styles.asia}>
        <Image src="/asia.png" alt="asia" height={350} width={1570}></Image>
      </div>
    </div>
  );
}

export default Distributor;
