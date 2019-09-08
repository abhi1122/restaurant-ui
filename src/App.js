import React from 'react';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';
import Routing from './navigations';
// import './App.css';
import Layout from './component/Layout';

// const store = createStore(rootReducer, applyMiddleware(thunk));
// //routing
// console.log(rootReducer,"rootReducer............")

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
