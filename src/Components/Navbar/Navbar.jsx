import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { CallMissedSharp, ShoppingCart } from '@material-ui/icons'
import useStyles, { link } from './styles';


const Navbar = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar position='fixed' className={CallMissedSharp.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={link} alt="" height='25px' className={classes.image} />
                        Commerce Store
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label='Show cart item' color='inherit'>
                            <Badge badgeContent={5} color='secondary'>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar