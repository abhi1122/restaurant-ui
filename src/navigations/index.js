import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//components
import Main from "../container/Home/Main";
import Demo from "../container/Demo";
import First from "../container/First";
import Second from "../container/Second";
import Third from "../container/Third";
//containers
export default (
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={Main} />
    <Route  path="/demo" component={Demo} />
    <Route  path="/first" component={First} />
    <Route  path="/second" component={Second} />
    <Route  path="/third" component={Third} />
  </Switch>
  </BrowserRouter>

);
