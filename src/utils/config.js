var envConfig=require("../config/env/dev/index");
var appConfig=require("../config/app-config.json");

let loadConfig = () => {
    let appConfigData = { ...appConfig };
    for (let key in appConfigData) {
        let value = appConfigData[key].replace(/[${}]/g, '');
        if (process.env[value]) {
            appConfig[key] = process.env[value];
        } else {
            console.log(value)
            appConfig[key] = envConfig[value];
        }
    }
}
loadConfig();
export default appConfig;