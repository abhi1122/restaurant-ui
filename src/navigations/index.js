import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//components
import Home from "../container/Home";
import List from "../container/List";
import Category from "../container/Category";
import Feedback from "../container/Feedback";
import Third from "../container/Third";
import Detail from "../container/Detail";
import Filter from "../container/Filter";
//containers
export default (
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route  path="/list" component={List} />
    <Route  path="/category" component={Category} />
    <Route  path="/feedback" component={Feedback} />
    <Route  path="/filter" component={Filter} />
    <Route  path="/detail" component={Detail} />
    <Route  path="/third" component={Third} />
  </Switch>
  </BrowserRouter>

);
