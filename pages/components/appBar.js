import { createTheme } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  InputBase,
  Link,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  ThemeProvider,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import Head from "next/head";
import NextLink from "next/link";
import classes from "../../utils/classes";
import { useContext, useEffect, useState } from "react";
import { Store } from "../../utils/Store";
import jsCookie from "js-cookie";
import { useRouter } from "next/router";
import axios from "axios";
import { useSnackbar } from "notistack";
import { getError } from "../../utils/error";
import styles from "./appBar.module.css";
import Image from "next/image";

export default function appBar({ title, description, children }) {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const [query, setQuery] = useState("");
  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  const theme = createTheme({
    components: {
      MuiLink: {
        defaultProps: {
          underline: "hover",
        },
      },
    },
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
    palette: {
      primary: {
        main: "#1175bc",
      },
      secondary: {
        main: "#A8C7E5",
      },
    },
  });

  const [anchorEl, setAnchorEl] = useState(null);
  const loginMenuCloseHandler = (e, redirect) => {
    setAnchorEl(null);
    if (redirect) {
      router.push(redirect);
    }
  };
  const loginClickHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const logoutClickHandler = () => {
    setAnchorEl(null);
    dispatch({ type: "USER_LOGOUT" });
    jsCookie.remove("userInfo");
    jsCookie.remove("cartItems");
    jsCookie.remove("shippingAddress");
    jsCookie.remove("paymentMethod");
    router.push("/");
  };

  const [sidbarVisible, setSidebarVisible] = useState(false);
  const sidebarOpenHandler = () => {
    setSidebarVisible(true);
  };
  const sidebarCloseHandler = () => {
    setSidebarVisible(false);
  };

  const { enqueueSnackbar } = useSnackbar();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        enqueueSnackbar(getError(err), { variant: "error" });
      }
    };
    fetchCategories();
  }, [enqueueSnackbar]);

  const isDesktop = useMediaQuery("(min-width:600px)");

  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };
  let [second, setsecond] = useState(styles.dropDown);
  function dropDown2() {
    if (second === styles.dropDown) {
      setsecond(styles.dropDownActive);
    }

    if (second === styles.dropDownActive) {
      setsecond(styles.dropDown);
    }
    if (third === styles.dropDownActive) {
      setThird(styles.dropDown);
    }
  }

  let [third, setThird] = useState(styles.dropDown);
  function dropDown3() {
    if (third === styles.dropDown) {
      setThird(styles.dropDownActive);
    }

    if (third === styles.dropDownActive) {
      setThird(styles.dropDown);
    }
    if (second === styles.dropDownActive) {
      setsecond(styles.dropDown);
    }
  }

  return (
    <>
      <Head>
        <title>{title ? `${title} - Humabiologics` : "Humabiologics"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" sx={classes.appbar} className={styles.appbar}>
          <Toolbar sx={classes.toolbar}>
            <Box display="flex" alignItems="center">
              <IconButton
                edge="start"
                aria-label="open drawer"
                onClick={sidebarOpenHandler}
                sx={classes.menuButton}
              >
                <MenuIcon sx={classes.navbarButton} />
              </IconButton>
              <NextLink href="/Homepage" passHref>
                <Image height={50} width={220} src="/logo.png"></Image>
              </NextLink>
              <ul className={styles.navLinks}>
                <li onClick={dropDown2}>HUMAN BIOMATERIALS</li>

                <li onClick={dropDown3}>COMPANY </li>
                <li>NEWS</li>
              </ul>
            </Box>
            <Drawer
              anchor="left"
              open={sidbarVisible}
              onClose={sidebarCloseHandler}
            >
              <List>
                <ListItem>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography>Shopping by category</Typography>
                    <IconButton
                      aria-label="close"
                      onClick={sidebarCloseHandler}
                    >
                      <CancelIcon />
                    </IconButton>
                  </Box>
                </ListItem>
                <Divider light />
                {categories.map((category) => (
                  <NextLink
                    key={category}
                    href={`/search?category=${category}`}
                    passHref
                  >
                    <ListItem
                      button
                      component="a"
                      onClick={sidebarCloseHandler}
                    >
                      <ListItemText primary={category}></ListItemText>
                    </ListItem>
                  </NextLink>
                ))}
              </List>
            </Drawer>

            <Box
              sx={isDesktop ? classes.visible : classes.hidden}
              className={styles.right}
            >
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
                      onClick={(e) =>
                        loginMenuCloseHandler(e, "/order-history")
                      }
                    >
                      Order History
                    </MenuItem>
                    <MenuItem onClick={logoutClickHandler}>Logout</MenuItem>
                  </Menu>
                </>
              ) : (
                <NextLink href="/login" passHref>
                  <Link>Login</Link>
                </NextLink>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <div className={second}>
        <ul className={styles.dropDownText1}>
          <NextLink href="./HumanBiomaterials">
            <li className={styles.links}>HUMAN COLLAGEN</li>
          </NextLink>
          <NextLink href="./HumanBiomaterials">
            <li className={styles.links}>HUMAN GELATIN</li>
          </NextLink>
          <NextLink href="./HumanBiomaterials">
            <li className={styles.links}>HUMAN ECM</li>
          </NextLink>
          <NextLink href="./HumanBiomaterials">
            <li className={styles.links}>HUMAN BIOINKS</li>
          </NextLink>
        </ul>
        <ul className={styles.dropDownText2}>
          <NextLink href="/">
            <li className={styles.links}>STORE</li>
          </NextLink>
          <NextLink href="/">
            <li className={styles.links}>CERTIFICATE OF ANALYSIS</li>
          </NextLink>
          <NextLink href="/">
            <li className={styles.links}>FAQS</li>
          </NextLink>
          <NextLink href="/">
            <li></li>
          </NextLink>
        </ul>
      </div>
      <div className={third}>
        <ul className={styles.dropDownText1}>
          <NextLink href="./Company">
            <li className={styles.links}>ABOUT US</li>
          </NextLink>
          <NextLink href="./Leadership">
            <li className={styles.links}>LEADERSHIP</li>
          </NextLink>
          <NextLink href="./Distributor">
            <li className={styles.links}>DISTRIBUTORS</li>
          </NextLink>
          <NextLink href="./HumanBiomaterials">
            <li className={styles.links}>QUALITY AND REGULATORY</li>
          </NextLink>
        </ul>
      </div>
    </>
  );
}
