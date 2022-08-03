import Appbar from "./components/appBar";
import Image from "next/image";
import Footer from "./components/footer";

function Quality() {
  return (
    <div>
      <Appbar></Appbar>
      <Image src="/qualityReg.png" alt="reg" height={350} width={1600}></Image>
      <Image
        src="/qualityBottom.png"
        alt="bottom"
        height={700}
        width={1500}
      ></Image>
<Footer></Footer>
    </div>
  );
}

export default Quality;
