
import './App.css';
import NavBar from './components/NavBar';
import { Typography } from '@material-ui/core';

function App() {
  return (
    <>
    <NavBar/>
    <Typography variant="h5">Bienvenidos al Coder-Commerce!</Typography>
    <Typography paragraph variant="body1">podrás hacer todas tus compras sin moverte de tu casa</Typography>
    </>
  );
}

export default App;
