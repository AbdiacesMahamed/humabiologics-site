import {
  Alert,
  Button,
  CircularProgress,
  Grid,
  List,
  ListItem,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
import classes from "../utils/classes";
import client from "../utils/client";
import { urlForThumbnail } from "../utils/image";
import { Store } from "../utils/Store";

const prices = [
  {
    name: "$1 to $50",
    value: "1-50",
  },
  {
    name: "$51 to $200",
    value: "51-200",
  },
  {
    name: "$201 to $1000",
    value: "201-1000",
  },
];

export default function SearchScreen() {
  const router = useRouter();
  const {
    
    category = "all",
    query = "all",
    price = "all",
    
    sort = "default",
    application = "all"
    
    
  } = router.query;
  const [state, setState] = useState({
    categories: [],
    products: [],
    applications: [],
    error: "",
    loading: true,
  });

  const { loading, products, error } = state;

  const [applications, setApplications] = useState([]);
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const { data } = await axios.get(`/api/products/applications`);
        setApplications(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchApplications();

    

    const fetchAppData = async () => {
      try {
        let gQuery = '*[_type == "product"';
        if (application !== "all") {
          gQuery += ` && application match "${application}" `;
        }
        if (query !== "all") {
          gQuery += ` && name match "${query}" `;
        }
        
        
        

        let order = "";
       

        gQuery += `] ${order}`;
        setState({ loading: true });

        const products = await client.fetch(gQuery);
        setState({ products, loading: false });
      } catch (err) {
        setState({ error: err.message, loading: false });
      }
   
    
    };
    fetchAppData();
  }, [application, query]);


  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        console.log(err.message);
      }

      
    };
    fetchCategories();


    

    const fetchData = async () => {
      try {
        let gQuery = '*[_type == "product"';
        if (category !== "all") {
          gQuery += ` && category match "${category}" `;
        }
        

        if (query !== "all") {
          gQuery += ` && name match "${query}" `;
        }
        if (price !== "all") {
          const minPrice = Number(price.split("-")[0]);
          const maxPrice = Number(price.split("-")[1]);
          gQuery += ` && price >= ${minPrice} && price <= ${maxPrice}`;
        }
        
        let order = "";
        if (sort !== "default") {
          if (sort === "lowest") order = "| order(price asc)";
          if (sort === "highest") order = "| order(price desc)";
         
        }

        gQuery += `] ${order}`;
        setState({ loading: true });

        const products = await client.fetch(gQuery);
        setState({ products, loading: false });
      } catch (err) {
        setState({ error: err.message, loading: false });
      }
    };
    fetchData();
  }, [category, price, query, sort]);

  const filterSearch = ({ category, sort, searchQuery, price,application }) => {
    const path = router.pathname;
    const { query } = router;
    if (searchQuery) query.searchQuery = searchQuery;
    if (application) query.application = application;
    if (category) query.category = category;
    if (sort) query.sort = sort;
    if (price) query.price = price;
   

    router.push({
      pathname: path,
      query: query,
    });
  };
  const categoryHandler = (e) => {
    filterSearch({ category: e.target.value });
  };
  const applicationHandler = (e) => {
    filterSearch({ application: e.target.value });
  };
  const sortHandler = (e) => {
    filterSearch({ sort: e.target.value });
  };
  const priceHandler = (e) => {
    filterSearch({ price: e.target.value });
  };
  // const applicationHandler = (e) => {
  //   filterSearch({ application: e.target.value });
  // };

  const {
    state: { cart },
    dispatch,
  } = useContext(Store);

  const { enqueueSnackbar } = useSnackbar();
  const addToCartHandler = async (product) => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      enqueueSnackbar("Sorry. Product is out of stock", { variant: "error" });
      return;
    }
    dispatch({
      type: "CART_ADD_ITEM",
      payload: {
        _key: product._id,
        name: product.name,
        countInStock: product.countInStock,
        slug: product.slug.current,
        price: product.price,
        image: urlForThumbnail(product.image),
        quantity,
      },
    });
    enqueueSnackbar(`${product.name} added to the cart`, {
      variant: "success",
    });
    router.push("/cart");
  };

  return (
    <Layout title="search">
      <Grid sx={classes.section} container spacing={2}>
        <Grid item md={3}>
          <List>
            <ListItem>
              <Box sx={classes.fullWidth}>
                <Typography>Categories</Typography>
                <Select fullWidth value={category} onChange={categoryHandler}>
                  <MenuItem value="all">All</MenuItem>
                  {categories &&
                    categories.map((category) => (
                      <MenuItem key={category} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                </Select>
              </Box>
            </ListItem>
            <ListItem>
              <Box sx={classes.fullWidth}>
                <Typography>Applications</Typography>
                <Select
                  fullWidth
                  value={application}
                  onChange={applicationHandler}
                >
                  <MenuItem value="all">All</MenuItem>
                  {applications &&
                    applications.map((application) => (
                      <MenuItem key={application} value={application}>
                        {application}
                      </MenuItem>
                    ))}
                </Select>
              </Box>
            </ListItem>
            {/* <ListItem>
              <Box sx={classes.fullWidth}>
                <Typography>Categories</Typography>
                <Select
                  fullWidth
                  value={application}
                  onChange={applicationHandler}
                >
                  <MenuItem value="all">All</MenuItem>
                  {applications &&
                    applications.map((application) => (
                      <MenuItem key={application} value={application}>
                        {application}
                      </MenuItem>
                    ))}
                </Select>
              </Box>
            </ListItem> */}
            <ListItem>
              <Box sx={classes.fullWidth}>
                <Typography>Prices</Typography>
                <Select value={price} onChange={priceHandler} fullWidth>
                  <MenuItem value="all">All</MenuItem>
                  {prices.map((price) => (
                    <MenuItem key={price.value} value={price.value}>
                      {price.name}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={9}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              {products && products.length !== 0 ? products.length : "No"}{" "}
              Results
              {query !== "all" && query !== "" && " : " + query}
              {price !== "all" && " : Price " + price}
              {(query !== "all" && query !== "") || price !== "all" ? (
                <Button onClick={() => router.push("/search")}>X</Button>
              ) : null}
            </Grid>

            <Grid item>
              <Typography component="span" sx={classes.sort}>
                Sort by
              </Typography>
              <Select value={sort} onChange={sortHandler}>
                <MenuItem value="default">Default</MenuItem>
                <MenuItem value="lowest">Price: Low to High</MenuItem>
                <MenuItem value="highest">Price: High to Low</MenuItem>
              </Select>
            </Grid>
          </Grid>

          <Grid sx={classes.section} container spacing={3}>
            {loading ? (
              <CircularProgress />
            ) : error ? (
              <Alert>{error}</Alert>
            ) : (
              <Grid container spacing={3}>
                {products.map((product) => (
                  <Grid item md={4} key={product.name}>
                    <ProductItem
                      product={product}
                      addToCartHandler={addToCartHandler}
                    />
                  </Grid>
                ))}
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
