import styles from "./company.module.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Image from "next/image";
import Appbar from "./components/appBar";

function Company() {
  return (
    <div className={styles.body}>
      <Appbar></Appbar>
      <div className={styles.section1}>
        <Image src="/company.png" height={1000} width={1570}></Image>
      </div>
    </div>
  );
}

export default Company;
