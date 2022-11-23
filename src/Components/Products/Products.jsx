import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Product/Product';
import useStyles from './styles'
import { useState, useEffect } from 'react';
import { Button } from '@material-ui/core'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Axios from 'axios';
const arr = [1, 2, 3, 4, 5, 6, "Ayesha", "Eeman", "Dani", "aashu"];

const Products = ({ products }) => {
    const classes = useStyles();
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [desc, setDesc] = useState("")
    const [link, setLink] = useState("")


    const createProduct = () => {
        if (name === "" || price === "" || desc === "" || link === "") {
            alert("Enter values!!!")
        } else {
            Axios.post("http://localhost:5000/products/addproduct", { name, price, desc, link }).then((response) => {
                alert("Product Created!!!!")
            })
        }
    }


    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justifyContent="center" spacing={4}>
                {

                    products.map((product) =>
                    (
                        <Grid item key={product._id} xs={21} sm={6} md={4} lg={2}>
                            <Product product={product} />
                        </Grid>
                    ))
                }

            </Grid>
            <br />
            <br />
            <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
                <TextField id="filled-basic" label="Name" variant="filled" onChange={(event) => { setName(event.target.value) }} />
                <TextField id="filled-basic" label="Price" variant="filled" onChange={(event) => { setPrice(event.target.value) }} />
                <TextField id="filled-basic" label="Desc" variant="filled" onChange={(event) => { setDesc(event.target.value) }} />
                <TextField id="filled-basic" label="Link" variant="filled" onChange={(event) => { setLink(event.target.value) }} />
            </Box>
            <Button variant="contained" color="success" onClick={createProduct}>
                Add Product
            </Button>
        </main>
    )
}

export default Products

