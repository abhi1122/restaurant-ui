import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import Main from "./component/Main";
import Layout from './component/Layout';

//routing
import Routing from './navigations';

function App() {
  return (
    <>
      <Layout>
       {Routing}
      </Layout>
    </>
  );
}

export default App;
