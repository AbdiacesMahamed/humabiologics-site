import styles from "./company.module.css";
import Footer from "./components/footer";
import Image from "next/image";
import Appbar from "./components/appBar";

function Company() {
  return (
    <div className={styles.body}>
      <Appbar></Appbar>
      <div className={styles.section1}>
        <Image
          src="/company.png"
          alt="about-us"
          height={850}
          width={1500}
        ></Image>
      </div>
      <Footer className={styles.bottom} ></Footer>
    </div>
  );
}
// deploy wrror

export default Company;
