import { AppBar, Typography, Toolbar, Button, Grid } from '@material-ui/core';
import PetsIcon from '@material-ui/icons/Pets';

export const NavBar = () => {
    return (
        <>
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
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}
export default NavBar