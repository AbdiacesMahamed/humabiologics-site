import { useState } from "react";
import NextLink from "next/link";
import classes from "../../utils/classes";
import styles from "./Navbar.module.css";
import { Box } from "@mui/system";
import { IconButton, InputBase, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };
  const isDesktop = useMediaQuery("(min-width:600px)");

  let [open, setOpen] = useState(styles.navLinks);
  function dropdown() {
    if (open === styles.navLinks) {
      setOpen(styles.navActive);
    }

    if (open === styles.navActive) {
      setOpen(styles.navLinks);
    }
  }

  let [second, setsecond] = useState(styles.dropdown);
  function dropdown2() {
    if (second === styles.dropdown) {
      setsecond(styles.dropdownActive);
    }

    if (second === styles.dropdownActive) {
      setsecond(styles.dropdown);
    }
    if (third === styles.dropdownActive) {
      setThird(styles.dropdown);
    }
  }

  let [third, setThird] = useState(styles.dropdown);
  function dropdown3() {
    if (third === styles.dropdown) {
      setThird(styles.dropdownActive);
    }

    if (third === styles.dropdownActive) {
      setThird(styles.dropdown);
    }
    if (second === styles.dropdownActive) {
      setsecond(styles.dropdown);
    }
  }

  return (
    <div className={styles.top}>
      <nav className={styles.nav}>
        <ul className={open}>
          <li className={styles.links} onClick={dropdown2}>
            HUMAN BIOMATERIALS
          </li>

          <li className={styles.links} onClick={dropdown3}>
            COMPANY
          </li>

          <li className={styles.links}>NEWS</li>
        </ul>
        <div className={styles.burger} onClick={dropdown}>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div>
        <div className={styles.right}>
          <Box sx={isDesktop ? classes.visible : classes.hidden}>
            <form onSubmit={submitHandler}>
              <Box sx={classes.searchForm}>
                <InputBase
                  name="query"
                  sx={classes.searchInput}
                  placeholder="Search products"
                  onChange={queryChangeHandler}
                />
                <IconButton
                  type="submit"
                  sx={classes.searchButton}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Box>
            </form>
          </Box>
        </div>
      </nav>

      <div className={second}>
        <ul className={styles.nonDecor}>
          <NextLink href="./HumanBiomaterials">
            <a>HUMAN COLLAGEN</a>
          </NextLink>
          <NextLink href="/">
            <a>HUMAN GELATIN</a>
          </NextLink>
          <NextLink href="./HumanECM">
            <a>HUMAN ECM</a>
          </NextLink>
          <NextLink href="./HumanBiomaterials">
            <a>HUMAN BIOINKS</a>
          </NextLink>
        </ul>
        <ul className={styles.nonDecor2}>
          <NextLink href="/">
            <a>STORE</a>
          </NextLink>
          <NextLink href="">
            <a>CERTIFICATE OF ANALYSIS</a>
          </NextLink>
          <NextLink href="/">
            <a>FAQS</a>
          </NextLink>
          <NextLink href="/HumanBiomaterials">
            <a></a>
          </NextLink>
        </ul>
      </div>

      <div className={third}>
        <ul className={styles.nonDecor}>
          <NextLink href="./Company">
            <a>ABOUT US</a>
          </NextLink>
          <NextLink href="./Leadership">
            <a>LEADERSHIP</a>
          </NextLink>
          <NextLink href="./Distributor">
            <a>DISTRIBUTORS</a>
          </NextLink>
          <NextLink href="./HumanBiomaterials">
            <a>QUALITY AND REGULATORY</a>
          </NextLink>
        </ul>
      </div>
      <div></div>
    </div>
  );
}

export default Navbar;
