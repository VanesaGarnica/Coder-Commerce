import { ItemDetail } from './ItemDetail';
import React from 'react';
import { arrayDeItems } from '../mock/arrayDeItems';
import { useParams } from 'react-router-dom';



const ItemDetailContainer = () => {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function getItem() {
        await sleep(500);
        return arrayDeItems[item_id];
    }
    const { item_id } = useParams();

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