import styles from "./Header.module.css";
import Image from "next/image";
import NextLink from "next/link";
import Link from "next/link";
import { useContext, useState } from "react";
import { Store } from "../../utils/Store";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import classes from "../../utils/classes";
import { useRouter } from "next/router";
import jsCookie from "js-cookie";

function Header() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const loginClickHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const loginMenuCloseHandler = (e, redirect) => {
    setAnchorEl(null);
    if (redirect) {
      router.push(redirect);
    }
  };
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const logoutClickHandler = () => {
    setAnchorEl(null);
    dispatch({ type: "USER_LOGOUT" });
    jsCookie.remove("userInfo");
    jsCookie.remove("cartItems");
    jsCookie.remove("shippingAddress");
    jsCookie.remove("paymentMethod");
    router.push("/");
  };
  return (
    <div>
      <section className={styles.container}>
        <div className={styles.logo}>
          <NextLink href="/Homepage">
            <Image width={400} height={100} src="/logo.png" alt="logo"></Image>
          </NextLink>
        </div>

        <div className={styles.accountContainer}>
          <Box>
            {userInfo ? (
              <>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  sx={classes.navbarButton}
                  onClick={loginClickHandler}
                >
                  {userInfo.name}
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={loginMenuCloseHandler}
                >
                  <MenuItem
                    onClick={(e) => loginMenuCloseHandler(e, "/profile")}
                  >
                    Profile
                  </MenuItem>
                  <MenuItem
                    onClick={(e) => loginMenuCloseHandler(e, "/order-history")}
                  >
                    Order History
                  </MenuItem>
                  <MenuItem onClick={logoutClickHandler}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <NextLink href="/login" passHref>
                <Link>Account</Link>
              </NextLink>
            )}
          </Box>
        </div>

        <div className={styles.pill}>Contact Us</div>
      </section>
    </div>
  );
}

export default Header;
