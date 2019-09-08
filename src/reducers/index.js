import { combineReducers } from 'redux';
import config from "../../src/utils/config.js"
import { format } from 'path';
//import simpleReducer from './simpleReducer';

console.log(config,"config...")

//const config = { "appName": "My APP", "version": "v1" }
var loadConfig = () => {
    return config;
}
export default combineReducers({
    config: loadConfig
    //simpleReducer
});