import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>logo</div>
      <ul className={styles.listContainer}>
        <li className={styles.wordMargin}>a</li>
        <li className={styles.wordMargin}>b</li>
        <li className={styles.wordMargin}>c</li>
        <li className={styles.wordMargin}>d</li>
      </ul>
    </nav>
  );
}

export default Navbar;
