
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Grid, Typography, Card, CardHeader, Divider } from '@material-ui/core';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue, orange } from '@material-ui/core/colors/blue';
import { red } from '@material-ui/core/colors';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemCountButtons } from './components/ItemCountButtons';
import { Cart } from './components/Cart';
import { Store } from './store';
import { useState } from 'react';

const theme = createMuiTheme({
  palette: {
    primary: red,
  },
});



function App() {

  const [data, setData] = useState({
    items: [],
    cantidad: 0,
    totalPagar: 0
  })

  return (
    <BrowserRouter>
      <Store.Provider value={[data, setData]}>
        <ThemeProvider theme={theme}>
          <NavBar />
          <Grid item container direction="row" xs={12}>
            <Grid item xs />
            <Grid item container xs={11}>
              <Switch>
                <Route exact path="/">
                  <ItemListContainer header="Todos los disfraces" />
                </Route>
                <Route path="/category/:category_name?">
                  <ItemListContainer />
                </Route>
                <Route path="/detail/:item_id">
                  <ItemDetailContainer />
                </Route>
                <Route path="/cart">
                  <Cart />
                </Route>
                {/* <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="*">
          <Error404 />
          </Route> */}
              </Switch>
            </Grid>
            <Grid item xs />
          </Grid>
        </ThemeProvider>
      </Store.Provider>
    </BrowserRouter>

  );
}

export default App;
