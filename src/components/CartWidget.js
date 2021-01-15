import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import { Store } from '../store';

const CartWidget = () => {
    const [data, setData] = React.useContext(Store);
    return (
        <>
            {
                data.cantidad > 0 && <IconButton color="inherit"><ShoppingCartIcon />{data.cantidad}</IconButton>
            }
        </>
    )
}

export { CartWidget };