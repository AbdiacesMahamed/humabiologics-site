import styles from "./footer.module.css";
import Image from "next/image";
import NextLink from "next/link";

function footer() {
  return (
    <div className={styles.body}>
      <div className={styles.topLine}></div>
      <div className={styles.imageContainer}>
        <div className={styles.pill}>SUBSCRIBE</div>
        <Image
          src="/HumabiologicsLogo.png"
          alt="logo"
          height={200}
          width={400}
        ></Image>
      </div>

      <ul className={styles.infoContainer}>
        <span className={styles.head}>Navigation</span>
        <div className={styles.line}></div>

        <NextLink href="/Company" passHref>
          <li className={styles.link}>About Us</li>
        </NextLink>
        <NextLink href="/HumanBiomaterials" passHref>
          <li className={styles.link}>HUMAN BIOMATERIALS</li>
        </NextLink>
        <NextLink href="/index" passHref>
          <li className={styles.link}>APPLICATIONS</li>
        </NextLink>

        <li>IFU</li>

        <li>NEWS AND EVENTS</li>

        <li>FAQS</li>
      </ul>

      <ul className={styles.infoContainer2}>
        <li className={styles.head}>Contact Us</li>
        <div className={styles.line}></div>
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
