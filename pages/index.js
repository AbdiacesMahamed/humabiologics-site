import { Alert, CircularProgress, Grid, Typography } from "@mui/material";

import { useEffect, useState } from "react";
import ProductItem from "../Humabiologics/components/ProductItem";
import Layout from "./layout";
import client from "./utils/client";

export default function Home() {
  const [state, setState] = useState({
    products: [],
    error: "",
    loading: true,
  });
  const { loading, error, products } = state;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await client.fetch(`*[_type == "product"]`);
        setState({ products, loading: false });
      } catch (err) {
        setState({ loading: false, error: err.message });
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Layout>
        {loading ? (
          <CircularProgress></CircularProgress>
        ) : error ? (
          <Alert variant="danger">{error}</Alert>
        ) : (
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item md={4} key={product.slug}>
                <ProductItem product={product}></ProductItem>
              </Grid>
            ))}
          </Grid>
        )}
      </Layout>
    </div>
  );
}
