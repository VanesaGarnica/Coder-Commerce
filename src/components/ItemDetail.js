import React from 'react'
import { Grid, Card, CardHeader, CardMedia, CardContent, Typography, Button, Box } from '@material-ui/core';
import { ItemCountButtons } from './ItemCountButtons';
import { NavLink, useHistory } from 'react-router-dom';
import { Store } from '../store';


const ItemDetail = ({ item }) => {

    const history = useHistory();
    const [data, setData] = React.useContext(Store);
    const [cantidadEnCarrito, setCantidadEnCarrito] = React.useState(0);

    const buttonFinalizarCompra = (
        <Box textAlign="center">
            <p />
            <Button variant="contained" disableElevation onClick={() => {
                history.push('/cart');
            }}>
                Finalizar Compra
            </Button>
        </Box>
    );


    const onAgregarAlCarrito = (cantidad) => {
        console.log(`Agregados al carrito: ${cantidad}`)
        setCantidadEnCarrito(cantidad);
        setData({
            ...data,
            cantidad: data.cantidad + cantidad,
            items: [...data.items, { item: item, quantity: cantidad }],
        });
    }

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
