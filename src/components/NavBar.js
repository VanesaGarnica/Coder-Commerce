import { AppBar, Typography, Toolbar, Button, Grid } from '@material-ui/core';
import PetsIcon from '@material-ui/icons/Pets';
import { CartWidget } from './CartWidget';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';
import { NavLink, useHistory } from 'react-router-dom'

const theme = createMuiTheme({
    palette: {
        primary: teal,
    },
});

const navLink = { textDecoration: "none", color: "white" };

export const NavBar = () => {
    const history = useHistory();
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
                        <Button color="inherit" onClick={() => { history.push("/category/animales") }}>
                            Animales
                        </Button>
                        <NavLink to="/category/profesiones" style={navLink}>
                            <Button color="inherit">
                                Profesiones
                            </Button>
                        </NavLink>
                        <NavLink to="/category/peliculas" style={navLink}>
                            <Button color="inherit">
                                Peliculas
                            </Button>
                        </NavLink>
                        <NavLink to="/cart" style={navLink}>
                            <CartWidget />
                        </NavLink>
                    </Grid>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}
export default NavBar