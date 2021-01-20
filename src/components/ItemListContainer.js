import { Typography } from "@material-ui/core"
import { ItemList } from "./ItemList"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

    function filtrarCategoria(item) {
        return item.category === category_name;
    }

    if (loading) {
        return (
            <LoadingPage />
        )
    }

    return (
        <>
            <Typography variant="h5" style={{ marginTop: 20, marginBottom: 20 }}>
                {category_name ? category_name.toUpperCase() : header.toUpperCase()}
            </Typography>
            <ItemList items={items} />
        </>
    )
}

export { ItemListContainer };