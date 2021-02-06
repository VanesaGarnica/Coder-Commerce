import { ItemDetail } from './ItemDetail';
import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getFirestore } from '../db'
import { LoadingPage } from './LoadingPage';
import { Typography, Grid, Button } from "@material-ui/core"


const ItemDetailContainer = () => {
    const { item_id } = useParams();
    const [item, setItem] = React.useState(undefined);
    const [loading, setLoading] = React.useState(false);

    const history = useHistory();
    
    React.useEffect(() => {
        const docRef = getFirestore().collection("items").doc(item_id);
        setLoading(true);
        docRef.get()
            .then(
                (doc) => {
                    if (doc.exists) {
                        setItem(doc.data());
                    } else {
                        setItem(undefined);
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
            {item ?
                (<ItemDetail item={item} item_id={item_id} />) :
                (
                    <Grid direction="column">
                        <Typography variant="h5" style={{ marginTop: "30vh", flexGrow: 1, textAlign: "center" }}>
                            Lo sentimos, este item no ha sido encontrado
                        </Typography>
                        <Button style={{ marginTop: 30 }} variant="contained" onClick={() => { history.push("/") }}>Volver a la página principal</Button>
                    </Grid>
                )}
        </>
    )
}

export { ItemDetailContainer };