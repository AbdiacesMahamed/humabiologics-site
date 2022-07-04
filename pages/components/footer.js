import styles from "./footer.module.css";
import Image from "next/image";
import NextLink from "next/link";

function footer() {
  return (
    <div className={styles.body}>
      <div className={styles.topLine}></div>
      <div className={styles.imageContainer}>
        <Image src="/HumabiologicsLogo.png" height={170} width={300}></Image>
      </div>

      <ul className={styles.infoContainer}>
        <span>Navigation</span>
        <li>About Us</li>

        <li>HUMAN BIOMATERIALS</li>

        <li>APPLICATIONS</li>

        <li>IFU</li>

        <li>NEWS AND EVENTS</li>

        <li>FAQS</li>
      </ul>

      <ul className={styles.infoContainer2}>
        <li>Contact Us</li>
        <li>HUMABIOLOGICS, INC.</li>
        <li>275 N GATEWAY DRIVE</li>
        <li>Phoenix, AZ 85034</li>
        <li>{`(602)612-4369 `}</li>
        <li>INFO@HUMABIOLOGICS.COM</li>
      </ul>
    </div>
  );
}

export default footer;
