import styles from "./Header.module.css";

function Header() {
  return (
    <div>
      <section className={styles.container}>
        <div className={styles.logo}></div>
      </section>
    </div>
  );
}

export default Header;
