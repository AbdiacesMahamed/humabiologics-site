import styles from "./company.module.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Image from "next/image";

function Company() {
  return (
    <div className={styles.body}>
      <Header></Header>
      <div className={styles.line1}></div>
      <div className={styles.top}>
        <Navbar></Navbar>
      </div>
      <div className={styles.section1}>
        <Image src="/company.png" height={1000} width={1570}></Image>
      </div>
    </div>
  );
}

export default Company;
