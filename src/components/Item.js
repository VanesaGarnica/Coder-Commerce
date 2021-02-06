import { Card, Grid, CardHeader, CardMedia, CardActionArea } from "@material-ui/core"
import {useHistory } from "react-router-dom";

const Item = ({ item }) => {
    const history = useHistory();
    return (
        <Grid item xs={12} sm={6} md={4} >
            <Card>
                <CardActionArea onClick={() => { history.push(`/detail/${item.id}`) }}>
                    <CardHeader
                        // avatar={<Avatar src={item.pictureUrl} />}
                        title={item.title}
                        subheader={`$${item.price}`} />
                    <CardMedia
                        // className={classes.media}
                        image={item.pictureUrl}
                        src={item.pictureUrl}
                        style={{ height: 250 }}
                    />
                </CardActionArea>
            </Card>
            <p />
        </Grid>
    )
}

export { Item };