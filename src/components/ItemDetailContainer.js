import { ItemDetail } from './ItemDetail';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../db'
import { LoadingPage } from './LoadingPage';


const ItemDetailContainer = () => {
    const { item_id } = useParams();
    const [item, setItem] = React.useState(undefined);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        const docRef = getFirestore().collection("items").doc(item_id);
        setLoading(true);
        docRef.get()
            .then(
                (doc) => {
                    if (doc.exists) {
                        setItem(doc.data());
                    } else {
                        console.log("El documento no existe.");
                    }
                    setLoading(false);
                }
            )
            .catch(e => { console.log(e) })
    }, [item_id])

    if (loading) {
        return (
            <LoadingPage />
        )
    }

    return (
        <>
            {item ? <ItemDetail item={item} /> : null}
        </>
    )
}

export { ItemDetailContainer };