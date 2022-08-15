import Image from "next/image";
import styles from "./Homepage.module.css";
import Appbar from "./components/appBar";
import Slider from "./components/slider";
import Footer from "./components/footer";
import NextLink from "next/link";
import Grid from "./components/Grid";
import Searchbar from "./components/SearchBar";
import Productgrid from "./components/productGrid";
import Applicationflex from "./components/applicationFlex";
import Misc from "./components/misc";
// https://humabiologics.sanity.studio/desk

function HomePage() {
  return (
    <div >
      <Appbar></Appbar>
      <Searchbar></Searchbar>
<div className={styles.body}>
      <video  autoPlay loop muted>
          <source src="./Bioprinting.mp4" type="video/mp4"></source>
        </video>
        <Grid></Grid>
<Productgrid></Productgrid>
<Applicationflex></Applicationflex>
<Misc></Misc>
<Slider></Slider>
<Footer></Footer>

        </div>
        
    </div>
  );
}

export default HomePage;
