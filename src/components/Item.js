import { Divider, Typography, Card, Grid, CardHeader, Avatar, CardMedia, CardContent } from "@material-ui/core"

const Item = ({ item }) => {

    return (
        <Grid item xs={3}>
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
                    style={{height:200}}
                />
                <CardContent>
                    <Typography variant="body1">
                        {item.description}
                    </Typography>
                </CardContent>
            </Card>
            <p />
        </Grid>
    )
}

export { Item };