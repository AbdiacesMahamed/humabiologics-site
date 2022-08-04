import styles from "./HumanGelatin.module.css";
import Image from "next/image";
import Appbar from "./components/appBar";
import Footer from "./components/footer";

function HumanGelatin() {
  return (
    <div className={styles.body}>
      <Appbar></Appbar>
      <div className={styles.imageContainer}>
        
        <Image
          className={styles.image}
          width={200}
          height={200}
          src="/gelatin.png"
          alt="gelatin"
        ></Image>
      </div>
      <div className={styles.textContainer}>
        <div  className={styles.totalContainer}>
        <div className={styles.seperation}>
          <div className={styles.headBox}>Human Gelatin</div>
          <div className={styles.textBox}>
            {`
            Gelatin has been used for generation of tissue-engineered scaffolds and can be combined with other human-derived biomaterials -such as Collagen Type I from human skin (HumaDerm offered by Humabiologics) – to make completely human-derived tissue engineered composites.
            `}
          </div>
        </div>
        </div>
        
       
      </div>
      <Footer  className={styles.bottom}></Footer>
    </div>
  );
}

export default HumanGelatin;
