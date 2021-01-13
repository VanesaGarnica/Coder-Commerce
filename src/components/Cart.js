import { Typography } from '@material-ui/core';
import React from 'react'
import { Store } from '../store';

const Cart = () => {
    const [data, setData] = React.useContext(Store);

    console.log(data);
    
    return (
        <>
        </>
    )
}

export { Cart }