import React from 'react'
import { Grid, Card, CardHeader, CardMedia, CardContent, Typography, Button, Box } from '@material-ui/core';
import { ItemCountButtons } from './ItemCountButtons';
import { useHistory } from 'react-router-dom';
import { Store } from '../store';


const ItemDetail = ({ item, item_id }) => {

    const history = useHistory();
    const [data, setData] = React.useContext(Store);
    const [cantidadEnCarrito, setCantidadEnCarrito] = React.useState(0);

    const buttonFinalizarCompra = (
        <Box textAlign="center">
            <p />
            <Button variant="contained" disableElevation onClick={() => {
                history.push('/cart');
            }}>
                Ir al carrito
            </Button>
        </Box>
    );


    const onAgregarAlCarrito = (cantidad) => {
        setCantidadEnCarrito(cantidad);
        let itemIndex = -1;
        data.items.forEach((itemData, index) => {
            console.log(itemData.id);
            console.log(item_id);
            if (itemData.id === item_id) {
                itemIndex = index;
            }
        })
        if (itemIndex === -1) {
            //no pudo encontrar el item
            setData({
                ...data,
                cantidad: data.cantidad + cantidad,
                totalPagar: data.totalPagar + (cantidad * item.price),
                items: [...data.items, { item: item, quantity: cantidad, id: item_id }],
            });
        } else {
            //encontro el item
            let prevQuantity = data.items[itemIndex].quantity;
            let itemsTemp = [...data.items];
            itemsTemp.splice(itemIndex, 1);
            setData({
                ...data,
                cantidad: data.cantidad + cantidad,
                totalPagar: data.totalPagar + (cantidad * item.price),
                items: [...itemsTemp, { item: item, quantity: prevQuantity + cantidad, id: item_id }],
            });
        }
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
