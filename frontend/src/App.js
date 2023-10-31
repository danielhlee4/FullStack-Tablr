import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import RestaurantIndex from './components/Restaurants';
import RestaurantShow from './components/Restaurants/RestaurantShow';
import ReservationIndex from './components/Reservations/index';

function App() {
  return (
    <>
        <div className='main-container'>
          <Navigation />
            <div className='content'>  
              <Switch>
                <Route exact path="/" component={RestaurantIndex} />
                <Route exact path="/restaurants/:restaurantId" component={RestaurantShow} />
                <Route exact path="/users/:userId/reservations" component={ReservationIndex} />
              </Switch>
            </div>  
          <Footer />
        </div>
    </>
  );
}

export default App;