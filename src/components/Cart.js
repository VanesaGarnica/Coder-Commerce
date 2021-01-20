import { Avatar, Button, Card, CardContent, CardHeader, Grid, IconButton } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import React from 'react'
import { useHistory } from 'react-router-dom';
import { Store } from '../store';

const Cart = () => {
    const [data, setData] = React.useContext(Store);
    const history = useHistory();

    return (
        <Grid container item xs={12} direction="row">
            <Grid item xs />
            <Grid item xs={8}>
                <p />
                {data.cantidad === 0 ?
                    (
                        <Card>
                            <CardHeader
                                // avatar={<Avatar src={item.pictureUrl} />}
                                title="No hay productos en el carrito de compras" />
                            <CardContent>
                                <Grid container direction="column">
                                    <Button onClick={() => { history.push("/") }}>Volver a la tienda</Button>
                                </Grid>
                            </CardContent>
                        </Card>
                    ) : (
                        <Card>
                            <CardHeader
                                // avatar={<Avatar src={item.pictureUrl} />}
                                title="Carrito de compras"
                                subheader={`Total: $${data.totalPagar.toFixed(2)}`} />
                            <CardContent>
                                <Grid container direction="column">

                                    {data.items.map((itemData, index) => {
                                        let total = itemData.quantity * itemData.item.price;
                                        const handleDelete = () => {
                                            let tempItems = [...data.items];
                                            tempItems = tempItems.filter(function (itemDataTemp, index, arr) {
                                                return itemDataTemp.item.id !== itemData.item.id;
                                            })
                                            let cantidad = data.cantidad - itemData.quantity;
                                            let totalPagar = data.totalPagar - (itemData.quantity * itemData.item.price);
                                            setData({
                                                ...data,
                                                cantidad: cantidad,
                                                totalPagar: totalPagar,
                                                items: tempItems
                                            });
                                        }
                                        return (
                                            <Card style={{ margin: 2 }}>
                                                <CardHeader
                                                    avatar={<Avatar>{itemData.quantity}</Avatar>}
                                                    title={itemData.item.title}
                                                    subheader={`($${itemData.item.price.toFixed(2)})`}
                                                    action={<>{`$${total.toFixed(2)}`}<IconButton onClick={handleDelete}><DeleteForeverIcon /></IconButton></>}
                                                />
                                            </Card>
                                        )
                                    })}
                                </Grid>
                            </CardContent>
                        </Card>
                    )}
                < p />
            </Grid>
            <Grid item xs />
        </Grid >
    )
}

export { Cart }