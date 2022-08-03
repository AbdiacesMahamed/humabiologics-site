import { createTheme } from "@mui/material/styles";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
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
import classes from "../utils/classes";
import { useContext, useEffect, useState } from "react";
import { Store } from "../utils/Store";
import jsCookie from "js-cookie";
import { useRouter } from "next/router";
import axios from "axios";
import { useSnackbar } from "notistack";
import { getError } from "../utils/error";
import styles from "./Layout.module.css";
import Image from "next/image";

export default function Layout({ title, description, children }) {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { darkMode, cart, userInfo } = state;
  // const queryChangeHandler = (e) => {
  //   setQuery(e.target.value);
  // };
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
      mode: darkMode ? "dark" : "light",
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
 const [applications, setApplications] = useState([]);
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const { data } = await axios.get(`/api/products/applications`);
        setApplications(data);
      } catch (err) {
        enqueueSnackbar(getError(err), { variant: "error" });
      }
    };
    fetchApplications();
  }, [enqueueSnackbar]);

  const isDesktop = useMediaQuery("(min-width:600px)");

  const submitHandler = (e) => {
    e.preventDefault();
    // router.push(`/search?query=${query}`);
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
        <AppBar position="static" sx={classes.appbar}>
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
                <Image
                  className={styles.logo}
                  src="/logo.png"
                  height={50}
                  width={220}
                  alt="logo"
                ></Image>
              </NextLink>
              <ul className={styles.navLinks}>
                <li onClick={dropDown2} className={styles.name} >HUMAN BIOMATERIALS</li>

                <li onClick={dropDown3} className={styles.name} >COMPANY </li>
                <NextLink href='/News'>
                <li className={styles.name}>NEWS</li>
                </NextLink>
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
                
                <ListItem>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography>Shopping by application</Typography>
                    <IconButton
                      aria-label="close"
                      onClick={sidebarCloseHandler}
                    >
                      <CancelIcon />
                    </IconButton>
                  </Box>
                </ListItem>
                <Divider light />
                {applications.map((application) => (
                  <NextLink
                  
                    key={application}
                    href={`/search?application=${application}`}
                    passHref
                    
                    
                  >
                    <ListItem
                      button
                      component="a"
                      onClick={sidebarCloseHandler}
                    >
                      <ListItemText primary={application}></ListItemText>
                    </ListItem>
                  </NextLink>
                ))}
              </List>
            </Drawer>
            <Box sx={isDesktop ? classes.visible : classes.hidden}>
              <form onSubmit={submitHandler}>
                <Box sx={classes.searchForm}>
                  <InputBase
                    sx={classes.searchInput}
                    placeholder="Search products"
                    // onChange={queryChangeHandler}
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
              {/* <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}
              ></Switch> */}
              <NextLink href="/cart" passHref>
                <Link>
                  <Typography component="span" className={styles.name}>
                    {cart.cartItems.length > 0 ? (
                      <Badge
                        color="secondary"
                        badgeContent={cart.cartItems.length}
                        
                      >
                        Cart
                      </Badge>
                    ) : (
                      "Cart"
                    )}
                  </Typography>
                </Link>
              </NextLink>
              {userInfo ? (
                <>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    sx={classes.navbarButton}
                    onClick={loginClickHandler}
                    className={styles.name}
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
                  <Link className={styles.name} >Login</Link>
                </NextLink>
              )}
            </Box>
          </Toolbar>
        </AppBar>
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
            <NextLink href="./Quality">
              <li className={styles.links}>QUALITY AND REGULATORY</li>
            </NextLink>
          </ul>
        </div>
        <Container component="main" sx={classes.main}>
          {children}
        </Container>
        <Box component="footer" sx={classes.footer}>
          <Typography>All rights reserved. Humabiologics.</Typography>
        </Box>
      </ThemeProvider>
    </>
  );
}
