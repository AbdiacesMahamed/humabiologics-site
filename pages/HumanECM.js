import styles from "./HumanECM.module.css";
import Image from "next/image";
import Appbar from "./components/appBar";
import Footer from './components/footer'

function HumanECM() {
  return (
    <div className={styles.body}>
      <Appbar></Appbar>
      <div className={styles.imageContainer}>
        
        <Image
          className={styles.image}
          width={200}
          height={200}
          src="/Human-ecm.png"
          alt="ecm"
        ></Image>
       
      </div>
      <div className={styles.textContainer}>
        
        
        <div className={styles.seperation}>
          <div className={styles.headBox}>Human ECM</div>
          <div className={styles.textBox}>
            {`One of the first commercially available native, human-derived extracellular matrix (ECM) products. Due to its human origin and minimal processing, HumaMatrix retains the native matrix proteins and growth factors found in human tissue including collagen, elastin, laminin, glycosaminoglycans and many other matrix proteins.`}
          </div>
        </div>
      </div>
      <Footer  className={styles.bottom}></Footer>
    </div>
  );
}

export default HumanECM;
