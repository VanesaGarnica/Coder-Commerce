import { Card, Grid, CardHeader, CardMedia } from "@material-ui/core"
import { NavLink } from "react-router-dom";

const Item = ({ item }) => {

    return (
        <Grid item xs={3}>
            <NavLink to={`/detail/${item.id}`} style={{textDecoration:"none"}}>
                <Card>
                    <CardHeader
                        // avatar={<Avatar src={item.pictureUrl} />}
                        title={item.title}
                        subheader={`$${item.price}`} />
                    <CardMedia
                        // className={classes.media}
                        image={item.pictureUrl}
                        src={item.pictureUrl}
                        title="Contemplative Reptile"
                        style={{ height: 300 }}
                    />
                </Card>
            </NavLink>
            <p />
        </Grid>
    )
}

export { Item };