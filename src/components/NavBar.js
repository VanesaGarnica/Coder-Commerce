import { useEffect, useState } from 'react';
import { AppBar, Typography, Toolbar, Button, Grid, IconButton, Menu } from '@material-ui/core';
import PetsIcon from '@material-ui/icons/Pets';
import MenuIcon from '@material-ui/icons/Menu';
import { CartWidget } from './CartWidget';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';
import { NavLink, useHistory } from 'react-router-dom'
import CategoriesDrawer from './CategoriesDrawer';

const theme = createMuiTheme({
    palette: {
        primary: teal,
    },
});

export const NavBar = () => {
    const history = useHistory();

    const [state, setState] = useState({
        mobileView: false
    })
    const { mobileView } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 801
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    }, []);

    const categories = [
        {
            name: "Animales",
            url: "/category/animales"
        },
        {
            name: "Profesiones",
            url: "/category/profesiones"
        },
        {
            name: "Peliculas",
            url: "/category/peliculas"
        },
        {
            name: "Otros",
            url: "/category/otros"
        },
    ]

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" color="primary">
                <Toolbar >
                    <Grid container item alignItems="center">
                        <NavLink to="/" style={{ textDecoration: "none", color: "white", flexGrow: 1 }}>
                            <Grid container item alignItems="center">
                                <PetsIcon style={{ margin: "10px" }} />
                                <Typography variant="h6">
                                    Cat Hero Feline Costumes
                                </Typography>
                            </Grid>
                        </NavLink>
                        {
                            !mobileView &&
                            (
                                <>
                                    {
                                        categories.map(
                                            (category, index) => {
                                                return (
                                                    <Button key={index} color="inherit" onClick={() => { history.push(category.url) }}>
                                                        {category.name}
                                                    </Button>
                                                )
                                            }
                                        )
                                    }
                                </>
                            )
                        }
                        <CartWidget />
                        {mobileView && <CategoriesDrawer categories={categories} />}
                    </Grid>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}
export default NavBar