import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Dialog, DialogActions, DialogContent, Grid, IconButton, TextField, Typography } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import React from 'react'
import { useHistory } from 'react-router-dom';
import { Store } from '../store';
import { getFirestore } from '../db'
import firebase from 'firebase/app';
import { LoadingPage } from './LoadingPage';
import Lottie from 'react-lottie';
import animationData from '../animations/46472-lurking-cat.json'

const Cart = () => {
    const [data, setData] = React.useContext(Store);
    const history = useHistory();

    const [dialogVaciarCarritoOpen, setDialogVaciarCarritoOpen] = React.useState(false);
    const [dialogFinalizarCompraOpen, setDialogFinalizarCompraOpen] = React.useState(false);
    const [emailValid, setEmailValid] = React.useState(true);
    const [emailDistinto, setEmailDistinto] = React.useState(false);
    const [nombre, setNombre] = React.useState("");
    const [apellido, setApellido] = React.useState("");
    const [telefono, setTelefono] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [repetirEmail, setRepetirEmail] = React.useState("");
    const [cargandoCompra, setCargandoCompra] = React.useState(false);
    const [orderId, setOrderId] = React.useState("");

    const startVaciarCarrito = () => {
        setDialogVaciarCarritoOpen(true);
    }
    const closeDialogVaciarCarrito = () => {
        setDialogVaciarCarritoOpen(false);
    }
    const confirmVaciarCarrito = () => {
        setData(
            {
                items: [],
                cantidad: 0,
                totalPagar: 0
            }
        )
        setDialogVaciarCarritoOpen(false);
    }

    const startFinalizarCompra = () => {
        setDialogFinalizarCompraOpen(true);
    }
    const closeDialogFinalizarCompra = () => {
        setDialogFinalizarCompraOpen(false);
    }

    const db = getFirestore();

    const validarEmailFinalizarCompra = () => {
        if (email === null) {
            setEmailValid(false);
            return;
        }
        let emailSplitted = email.split("@");
        if (emailSplitted.length !== 2) {
            setEmailValid(false);
            return;
        }
        let domainSplitted = emailSplitted[1].split(".");
        if (domainSplitted.length < 2) {
            setEmailValid(false);
            return;
        }
        if (email !== repetirEmail) {
            setEmailDistinto(true);
            return
        }
        setEmailValid(true);
        setEmailDistinto(false);

        const collectionRef = db.collection("purchases");

        let itemsSubir = [];
        data.items.map(
            (itemData, index) => {
                for (let i = 0; i < itemData.quantity; i++) {
                    itemsSubir.push(
                        {
                            id: itemData.id,
                            title: itemData.item.title,
                            price: itemData.item.price
                        }
                    )
                }
            }
        )
        var newOrder = {
            buyer: {
                email: email,
                name: `${nombre} ${apellido}`,
                phone: telefono
            },
            items: itemsSubir,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: data.totalPagar
        }
        setCargandoCompra(true);

        collectionRef.add(newOrder)
            .then(
                ({ id }) => {
                    setOrderId(id);
                    confirmVaciarCarrito();
                    setDialogFinalizarCompraOpen(false);
                }
            )
            .catch(
                e => { console.log(e); }
            )
            .finally(
                () => { setCargandoCompra(false); }
            )

    }

    const DialogVaciarCarrito = () => {
        return (
            <Dialog open={dialogVaciarCarritoOpen} onClose={closeDialogVaciarCarrito}>
                <DialogContent>
                    Esta seguro de vaciar el carrito?
                </DialogContent>
                <DialogActions>
                    <Button onClick={confirmVaciarCarrito}>
                        Si
                    </Button>
                    <Button variant="contained" disableElevation onClick={closeDialogVaciarCarrito}>
                        No
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }

    const confirmarDisabled = () => {
        if (email == null || nombre == null || apellido == null || telefono == null || repetirEmail == null) return true;
        if (email == "" || nombre == "" || apellido == "" || telefono == "" || repetirEmail == "") return true;
        return false;
    }

    const dialogFinalizarCompra = (
        <Dialog maxWidth="sm" fullWidth open={dialogFinalizarCompraOpen} onClose={closeDialogFinalizarCompra}>
            <DialogContent>
                <TextField label="Nombre" style={{ marginBottom: 10 }} fullWidth value={nombre} onChange={(e) => { setNombre(e.target.value) }} />
                <TextField label="Apellido" style={{ marginBottom: 10 }} fullWidth value={apellido} onChange={(e) => { setApellido(e.target.value) }} />
                <TextField label="Telefono" style={{ marginBottom: 10 }} fullWidth value={telefono} onChange={(e) => { setTelefono(e.target.value) }} />
                <TextField label="Email" style={{ marginBottom: 10 }} fullWidth value={email} helperText={emailValid ? null : "Por favor ingrese un email valido."} onChange={(e) => { setEmail(e.target.value) }} />
                <TextField label="Repetir Email" style={{ marginBottom: 10 }} fullWidth value={repetirEmail} helperText={emailDistinto ? "Por favor ingrese el mismo email." : null} onChange={(e) => { setRepetirEmail(e.target.value) }} />
            </DialogContent>
            <DialogActions>
                <Button disabled={confirmarDisabled()} variant="contained" disableElevation onClick={validarEmailFinalizarCompra}>
                    Confirmar
                    </Button>
                <Button onClick={closeDialogFinalizarCompra}>
                    Cancelar
                    </Button>
            </DialogActions>
        </Dialog>
    )

    const animationOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const dialogOrdenCreada = (
        <Dialog maxWidth="sm" fullWidth open={orderId !== ""} >
            <DialogContent>
                <Typography>
                    Orden creada con exito!
                </Typography>
                <Typography>
                    {`Numero de orden: ${orderId}`}
                </Typography>
                <Lottie options={animationOptions}
                    height={250}
                    width={250}
                    isStopped={false}
                    isPaused={false} />
            </DialogContent>
            <DialogActions>
                <Button variant="contained" disableElevation onClick={() => { history.push("/") }}>
                    Volver a la tienda
                </Button>
            </DialogActions>
        </Dialog>
    )

    if (cargandoCompra) {
        return (
            <LoadingPage />
        )
    }

    return (
        <>
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
                                <CardActions style={{ justifyContent: "center" }}>
                                    <Button variant="contained" disableElevation onClick={startFinalizarCompra}>Finalizar compra</Button>
                                    <Button variant="inherit" disableElevation onClick={startVaciarCarrito}>Vaciar carrito</Button>
                                </CardActions>
                            </Card>
                        )}
                    < p />
                </Grid>
                <Grid item xs />
            </Grid >
            {dialogFinalizarCompra}
            {dialogOrdenCreada}
            <DialogVaciarCarrito />
        </>
    )
}

export { Cart }