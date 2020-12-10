import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';

const Carrito = () => {

    return (
        <>
            <IconButton  color="inherit" aria-label="add to shopping cart">
                <ShoppingCartIcon />
            </IconButton>
        </>
    )
}

export { Carrito };