
import './App.css';
import NavBar from './components/NavBar';
import { Typography, Card, CardHeader, Divider } from '@material-ui/core';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue, orange } from '@material-ui/core/colors/blue';
import { red } from '@material-ui/core/colors';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemCountButtons } from './components/ItemCountButtons';

const theme = createMuiTheme({
  palette: {
    primary: red,
  },
});


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <ItemListContainer header="Lorem ipsum dolor sit amet." greeting="Bienvenidos a mi tienda." />
        <ItemDetailContainer />
        <Divider />
        <Typography paragraph variant="body1">podrás hacer todas tus compras sin moverte de tu casa</Typography>
      </ThemeProvider>
      <ItemCountButtons initial={0} stock={10} onAdd={() => { console.log("Agregaste productos al carrito") }} />
    </>
  );
}

export default App;
