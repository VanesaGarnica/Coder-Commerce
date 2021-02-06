import { Typography, Grid, Button } from "@material-ui/core"
import { ItemList } from "./ItemList"
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getFirestore } from "../db";
import { LoadingPage } from "./LoadingPage";

const ItemListContainer = ({ header }) => {

    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const { category_name } = useParams();
    useEffect(() => {
        setLoading(true)
        const collectionRef = category_name ? getFirestore().collection("items").where("category", "==", category_name) : getFirestore().collection("items");
        collectionRef.get()
            .then(
                (data) => {
                    var tempArray = [];
                    data.forEach(
                        (doc, index, arr) => {
                            tempArray.push(
                                { ...doc.data(), id: doc.id }
                            )
                        }
                    )
                    setItems(tempArray);
                    setLoading(false);
                }
            )
            .catch(e => { console.log(e) })
    }, [category_name]);

    const history = useHistory();
    
    function filtrarCategoria(item) {
        return item.category === category_name;
    }

    if (loading) {
        return (
            <LoadingPage />
        )
    }
    return (
        <Grid container>
            <Grid item xs />
            <Grid item container xs={12} sm={11} md={10} lg={8} xl={6}>
                {
                    items.length > 0 ?
                        (
                            <>
                                <Typography variant="h5" style={{ marginTop: 20, marginBottom: 20 }}>
                                    {category_name ? category_name.toUpperCase() : header.toUpperCase()}
                                </Typography>
                                <ItemList items={items} />
                            </>
                        )
                        :
                        (
                            <Grid direction="column">
                                <Typography variant="h5" style={{ marginTop: "30vh", flexGrow: 1, textAlign: "center" }}>
                                    Lo sentimos, esta categoria no existe
                                </Typography>
                                <Button style={{marginTop:30}} variant="contained" onClick={() => { history.push("/") }}>Volver a la página principal</Button>
                            </Grid>
                        )
                }

            </Grid>
            <Grid item xs />
        </Grid>
    )
}

export { ItemListContainer };