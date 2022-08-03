import { Carousel } from "react-bootstrap";
import Image from "next/image";
import styles from "./slider.module.css";
// hi
function slider() {
  return (
    <Carousel className={styles.body}>
      <Carousel.Item interval={1000}>
        <Image
          //   className="d-block w-100"
          //   classname={styles.img}
          //   size="sm"
          height={730}
          width={1570}
          src="/1.png"
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={730}>
        <Image
          //   className="d-block w-100"
          //   classname={styles.img}
          //   size="sm"
          height={730}
          width={1570}
          src="/2.png"
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          //   className="d-block w-100"
          //   classname={styles.img}
          //   size="sm"
          height={730}
          width={1570}
          src="/3.png"
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          //   className="d-block w-100"
          //   classname={styles.img}
          //   size="sm"
          height={730}
          width={1570}
          src="/4.png"
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          //   className="d-block w-100"
          //   classname={styles.img}
          //   size="sm"
          height={730}
          width={1570}
          src="/5.png"
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          //   className="d-block w-100"
          //   classname={styles.img}
          //   size="sm"
          height={730}
          width={1570}
          src="/6.png"
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          //   className="d-block w-100"
          //   classname={styles.img}
          //   size="sm"
          height={730}
          width={1570}
          src="/7.png"
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default slider;
