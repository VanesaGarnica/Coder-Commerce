import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const ItemCountButtons = ({ stock, initial, onAdd }) => {
    const classes = useStyles();
    const [amount, setAmount] = React.useState(initial);
    return (
        <>
            <div className={classes.root}>
                <ButtonGroup size="large" aria-label="small outlined button group">
                    <Button onClick={() => { setAmount(Math.max(amount - 1, 0)) }} >-</Button>
                    <Button disabled><Typography style={{ color: "black" }} >{amount}</Typography></Button>
                    <Button onClick={() => { setAmount(Math.min(amount + 1, stock)) }} >+</Button>
                </ButtonGroup>
                <Button
                    disabled={amount === 0}
                    variant="contained"
                    size="small"
                    disableElevation
                    onClick={() => { onAdd(amount) }}
                >
                    Agregar al carrito
                </Button>
            </div>
        </>

    )
}

export { ItemCountButtons }