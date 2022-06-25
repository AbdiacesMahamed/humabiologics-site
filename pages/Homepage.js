import Navbar from "./components/Navbar";
import styles from "./Homepage.module.css";

function HomePage() {
  return (
    <div>
      <div className={styles.top}>
        <Navbar></Navbar>
      </div>
      <div>
        <video autoPlay loop muted>
          <source src="./" type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
}

export default HomePage;
