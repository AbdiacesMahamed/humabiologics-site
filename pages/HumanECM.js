import styles from "./HumanECM.module.css";
import Image from "next/image";
import Appbar from "./components/appBar";

function HumanECM() {
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
        <Image
          className={styles.image}
          width={200}
          height={200}
          src="/Human-ecm.png"
          alt="ecm"
        ></Image>
        <Image
          className={styles.image}
          width={200}
          height={200}
          src="/gelatin.png"
          alt="gelatin"
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
        <div className={styles.seperation}>
          <div className={styles.headBox}>Native Human Skin Collagen</div>
          <div className={styles.textBox}>
            {`
            Gelatin has been used for generation of tissue-engineered scaffolds and can be combined with other human-derived biomaterials -such as Collagen Type I from human skin (HumaDerm offered by Humabiologics) – to make completely human-derived tissue engineered composites.
            `}
          </div>
        </div>
        <div className={styles.seperation}>
          <div className={styles.headBox}>Native Human Skin Collagen</div>
          <div className={styles.textBox}>
            {`One of the first commercially available native, human-derived extracellular matrix (ECM) products. Due to its human origin and minimal processing, HumaMatrix retains the native matrix proteins and growth factors found in human tissue including collagen, elastin, laminin, glycosaminoglycans and many other matrix proteins.`}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HumanECM;
