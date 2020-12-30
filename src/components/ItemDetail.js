import React from 'react'
import { Card, CardHeader, CardMedia, CardContent, Typography } from '@material-ui/core';

const ItemDetail = ({ item }) => {
    return (
        <>
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
                    style={{ height: 500 }}
                />
                <CardContent>
                    <Typography variant="body1">
                        {item.description}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

export { ItemDetail };
