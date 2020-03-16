import React from 'react';

// Styling
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

//UI components
import Navbar from './components/ui/navbar/Navbar'

//Page components
import IndexPage from './components/pages/index/IndexPage'
import FoodsPage from './components/pages/foods-index/FoodsIndex'
import DetailsPage from './components/pages/foods-detail/FoodDetails'

// RRD components
import { Switch, Route } from 'react-router-dom'


const  App = () => {
      return (
        <>
          <Navbar />

          <Switch>
              <Route path="/" exact component={IndexPage} />
              <Route path="/alimentos" component={FoodsPage} />
              <Route path="/detalles" component={DetailsPage} />
          </Switch>
        </>
      )
}

export default App;
