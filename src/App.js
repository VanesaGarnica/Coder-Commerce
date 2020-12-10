
import './App.css';
import NavBar from './components/NavBar';
import { Typography } from '@material-ui/core';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {blue, orange} from '@material-ui/core/colors/blue';
import { red } from '@material-ui/core/colors';
import { ItemListContainer } from './components/ItemListContainer';

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
        <ItemListContainer/>
        <Typography variant="h5">Bienvenidos al Coder-Commerce!</Typography>
        <Typography paragraph variant="body1">podrás hacer todas tus compras sin moverte de tu casa</Typography>
      </ThemeProvider>
    </>
  );
}

export default App;
