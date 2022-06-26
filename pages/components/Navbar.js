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

  return (
    <div className={styles.top}>
      <nav className={styles.nav}>
        <ul className={open}>
          <li className={styles.links}>HUMAN BIOMATERIALS</li>
          <li className={styles.links}>COMPANY</li>
          <li className={styles.links}>NEWS</li>
        </ul>
        <div className={styles.burger} onClick={dropdown}>
          <div className={styles.line1}></div>
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
    </div>
  );
}

export default Navbar;
