import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import CarScreen from "../car-screen/car-screen";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <CarScreen />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
