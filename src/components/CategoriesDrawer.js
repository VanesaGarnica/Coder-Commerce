import { useEffect, useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Drawer, AppBar, Typography, Toolbar, Button, Grid, IconButton, Menu } from '@material-ui/core';
import PetsIcon from '@material-ui/icons/Pets';
import MenuIcon from '@material-ui/icons/Menu';
import { CartWidget } from './CartWidget';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';
import { useHistory } from 'react-router-dom'

export const CategoriesDrawer = (props) => {
    const history = useHistory();
    const { categories } = props;

    const [drawerOpen, setDrawerOpen] = useState(false);
    return (
        <>
            <IconButton style={{ color: "white" }} onClick={() => { setDrawerOpen(true) }}>
                <MenuIcon />
            </IconButton>
            <Drawer anchor={"top"} open={drawerOpen} onClose={() => { setDrawerOpen(false) }}>
                <List>
                    {categories.map((category, index) => {

                        const handleChangeCategory = () => {
                            history.push(category.url);
                            setDrawerOpen(false);
                        }

                        return (
                            <ListItem button key={index} onClick={handleChangeCategory} >
                                <ListItemText primary={category.name} />
                            </ListItem>
                        )
                    })}
                </List>
            </Drawer>
        </>
    )
}
export default CategoriesDrawer