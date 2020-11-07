import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Top from './containers/pages/Top';
import ItemListProvider from 'contexts/itemList';
import ShoppingListProvider from 'contexts/shoppingList';
import SelectItemProvider from 'contexts/selectItem';
import './App.css';


function App() {
  return (
    <ItemListProvider>
      <ShoppingListProvider>
        <SelectItemProvider>
          <Router>
            <div id="app">
              <Switch>
                <Route exact path='/' component={Top}></Route>
              </Switch>
            </div>
          </Router>
        </SelectItemProvider>
      </ShoppingListProvider>
    </ItemListProvider>
  );
};

export default App;
