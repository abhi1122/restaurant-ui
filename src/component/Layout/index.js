import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Header from "./UI/Header";
import SearchBar from "./UI/Search";

class Layout extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render(){
    const header = <Header />;
    const search = <SearchBar />;

  return (
    <div className="container-fluid">
      {search}
        {header}
        <main>
          {this.props.children}
        </main>
      </div>
  )}
}
const styles  = theme => ({
  root :{width:200}
});
export default withStyles(styles)(Layout);
