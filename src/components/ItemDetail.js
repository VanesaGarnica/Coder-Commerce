import React from 'react'
import { Grid, Card, CardHeader, CardMedia, CardContent, Typography, Button, Box } from '@material-ui/core';
import { ItemCountButtons } from './ItemCountButtons';
import { NavLink } from 'react-router-dom';

const buttonFinalizarCompra = (
    <Box textAlign="center">
        <p />
        <NavLink to="/cart" style={{ textDecoration: "none", color: "black" }}>
            <Button variant="contained" disableElevation>
                Finalizar Compra
            </Button>
        </NavLink>
    </Box>
);

const ItemDetail = ({ item }) => {

    const onAgregarAlCarrito = (cantidad) => {
        console.log(`Agregados al carrito: ${cantidad}`)
        setCantidadEnCarrito(cantidad);
    }
    const [cantidadEnCarrito, setCantidadEnCarrito] = React.useState(0);

    return (
        <>
            <Grid container item xs={12} direction="row">
                <Grid item xs />
                <Grid item xs={8}>
                    <p />
                    <Card>
                        <CardHeader
                            // avatar={<Avatar src={item.pictureUrl} />}
                            title={item.title}
                            subheader={`$${item.price}`} />
                        <CardMedia
                            // className={classes.media}
                            image={item.pictureUrl}
                            src={item.pictureUrl}
                            title="Contemplative Reptile"
                            style={{ height: 500 }}
                        />
                        <CardContent>
                            <Typography variant="body1">
                                {item.description}
                            </Typography>
                            {cantidadEnCarrito === 0 ? (
                                <ItemCountButtons initial={0} stock={10} onAdd={onAgregarAlCarrito} />
                            ) : buttonFinalizarCompra}
                        </CardContent>
                    </Card>
                    < p />
                </Grid>
                <Grid item xs />
            </Grid>
        </>
    )
}

export { ItemDetail };
