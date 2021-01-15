import { Typography } from "@material-ui/core"
import { ItemList } from "./ItemList"
import { useState, useEffect } from "react";
import { arrayDeItems } from "../mock/arrayDeItems";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ header }) => {

    const [estadoItems, setEstadoItems] = useState([]);
    useEffect(() => {
        obtenerDatosItems();
    });

    function filtrarCategoria(item) {
        return item.category === category_name;
    }

    const obtenerDatosItems = () => {
        setTimeout(() => {
            let itemsFiltradosCategoria = arrayDeItems.filter(filtrarCategoria);
            setEstadoItems(category_name ? itemsFiltradosCategoria : arrayDeItems);
        }, 500);
    }
    const { category_name } = useParams();

    return (
        <>
            <Typography variant="h5" style={{marginTop:20, marginBottom:20}}>
                {category_name ? category_name.toUpperCase() : header.toUpperCase()}
            </Typography>
            <ItemList items={estadoItems} />
        </>
    )
}

export { ItemListContainer };