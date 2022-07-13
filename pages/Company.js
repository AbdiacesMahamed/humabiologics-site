import styles from "./company.module.css";

import Image from "next/image";
import Appbar from "./components/appBar";

function Company() {
  return (
    <div className={styles.body}>
      <Appbar></Appbar>
      <div className={styles.section1}>
        <Image src="/company.png" height={850} width={1500}></Image>
      </div>
    </div>
  );
}

export default Company;
