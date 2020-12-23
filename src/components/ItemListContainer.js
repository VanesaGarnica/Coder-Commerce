import { Divider, Typography } from "@material-ui/core"
import { ItemList } from "./ItemList"
import { useState, useEffect } from "react";


const arrayDeItems = [
    {
        id: 1,
        title: "Disfraz de leon",
        description: "Pequeño leoncito",
        price: 499.99,
        pictureUrl: "https://images-na.ssl-images-amazon.com/images/I/91Gb%2B0e-zLL._AC_SX466_.jpg"
    },
    {
        id: 2,
        title: "Disfraz de payaso",
        description: "Payaso gatuno",
        price: 699.99,
        pictureUrl: "https://i.pinimg.com/originals/11/36/ce/1136ce4c33066a4093b288debad4a863.jpg"
    }
]


const ItemListContainer = ({ header, greeting }) => {

    const [estadoItems, setEstadoItems] = useState([]);
    useEffect(() => {
        obtenerDatosItems();
    });

    const obtenerDatosItems = () => {
        setTimeout(() => {
            setEstadoItems(arrayDeItems);
        }, 2000);
    }

    return (
        <>
            <Typography variant="h5">
                {header}
            </Typography>
            <Typography variant="h6">
                {greeting}
            </Typography>
            <ItemList items={estadoItems} />
        </>
    )
}

export { ItemListContainer };