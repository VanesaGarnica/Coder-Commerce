import { Grid } from "@material-ui/core"
import { Item } from "./Item";

const ItemList = ({ items }) => {

    return (
        <>
            <Grid container spacing={2} >
                {
                    items.map(
                        (elementoItem, index) => {
                            return (
                                <Item key={index} item={elementoItem} />
                            )
                        }
                    )
                }
            </Grid>
        </>
    )
}

export { ItemList };