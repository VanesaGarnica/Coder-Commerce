import { Divider, Typography } from "@material-ui/core"

const ItemListContainer = ({ header, greeting }) => {

    return (
        <>
            <Typography variant="h5">
                {header}
            </Typography>
            <Typography variant="h6">
                {greeting}
            </Typography>
        </>
    )
}

export { ItemListContainer };