import { AppBar, Typography, Toolbar, Button, Grid } from '@material-ui/core';
import PetsIcon from '@material-ui/icons/Pets';
import { Carrito } from './CartWidget';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { red, teal } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: teal,
  },
});

export const NavBar = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" color="primary">
                <Toolbar >
                    <Grid container item alignItems="center">
                        <PetsIcon style={{margin:"10px"}} />
                        <Typography variant="h6" style={{ flexGrow: 1 }}>
                            CatHero^^
                        </Typography>
                        <Button color="inherit">
                            Categorias
                        </Button>
                        <Button color="inherit">
                            Promociones
                        </Button>
                        <Button color="inherit">
                            Mas vendidos
                        </Button>
                        <Carrito/>
                    </Grid>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}
export default NavBar