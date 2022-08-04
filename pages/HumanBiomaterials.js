import styles from "./HumanBiomaterials.module.css";
import Image from "next/image";
import Appbar from "./components/appBar";
import Footer from "./components/footer";

function biomaterials() {
  return (
    <div className={styles.body}>
      <Appbar></Appbar>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          width={200}
          height={200}
          src="/human-collagen.png"
          alt="collagen"
        ></Image>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.seperation}>
          <div className={styles.headBox}>Native Human Skin Collagen</div>
          <div className={styles.textBox}>
            {
              "type 1 Collagen is the most abundant type of collagen in the human body, as a major structural matrix protein in skin, and many other tissues (bone, tendon, and fibrous connective tissues) [1]. There are a number of types of collagen identified to date, and all are comprised of molecules containing three polypeptide chains arranged in a triple helical conformation[2] The types of collagen differ slightly in the primary amino acid sequence of their polypeptide chains. type 1 collagen is heterotrimer composed of one a2(1) chain and two a1(1) chains [3]"
            }
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
      <Footer  ></Footer>
      </div>
      
    </div>
  );
}

export default biomaterials;
