import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import { Store } from '../store';
import { useHistory } from 'react-router-dom';

const CartWidget = () => {
    const [data, setData] = React.useContext(Store);
    const history = useHistory();
    return (
        <>
            {
                data.cantidad > 0 && <IconButton color="inherit" onClick={()=>{history.push("/cart")}} ><ShoppingCartIcon />{data.cantidad}</IconButton>
            }
        </>
    )
}

export { CartWidget };