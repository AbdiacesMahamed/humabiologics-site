import { Box, IconButton, InputBase } from "@mui/material";
import classes from '../../utils/classes'
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";
import { useEffect } from "react";


export default function Searchbar(){
    let router = useRouter()
    const submitHandler = (e) => {
        e.preventDefault();
        router.push(`/certification/${slug}`);
      };
      const queryChangeHandler = (e) => {
        setQuery(e.target.value);
      };

      
    return(
        <div>
            <Box
              
              
            >
              <form onSubmit={submitHandler}>
                <Box sx={classes.searchForm}>
                  <InputBase
                    name="query"
                    sx={classes.searchInput}
                    placeholder="Certification"
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
    )
}


        