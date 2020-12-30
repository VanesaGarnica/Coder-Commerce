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
        console.log(item_id);
        return arrayDeItems[item_id];
    }
    const { item_id } = useParams();
    // React.useEffect(() => {
    //     console.log("received item_id to: ", item_id);
    //     return () => {
    //         console.log("will change item_id to: ", item_id);
    //     }
    // }, [item_id]);

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