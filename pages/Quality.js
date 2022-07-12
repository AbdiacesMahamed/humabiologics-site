import styles from "./Quality.module.css";
import Appbar from "./components/appBar";
import Image from "next/image";

function Quality() {
  return (
    <div>
      <Appbar></Appbar>
      <Image src="/qualityReg.png" height={350} width={1600}></Image>
      <Image src="/qualityBottom.png" height={700} width={1500}></Image>
    </div>
  );
}

export default Quality;
