import { ItemDetail } from './ItemDetail';
import React from 'react';

const itemData = {
    title: "Disfraz de payaso",
    description: "Payaso gatuno",
    price: 699.99,
    pictureUrl: "https://i.pinimg.com/originals/11/36/ce/1136ce4c33066a4093b288debad4a863.jpg"
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function getItem() {
    await sleep(2000);
    return itemData;
}


const ItemDetailContainer = () => {

    const [item, setItem] = React.useState(undefined);

    const obtenerDatos = async () => {
        const data = (await getItem());
        setItem(data);
    };

    React.useEffect(() => {
        obtenerDatos();
    }, [])

    return (
        <>
            {item ? <ItemDetail item={item} /> : null}
        </>
    )
}

export { ItemDetailContainer };