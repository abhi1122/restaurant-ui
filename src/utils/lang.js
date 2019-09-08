const envServer = process.env.ENV_SERVER;
var langData,errText="Please add text in lang file";
var loadLang=(text,lang="en")=>{
    let langUrl="../config/lang/"+lang+"/common.json";
    
    langData=require('../config/lang/en/common.json');

    if(! langData || ! text || ! langData[text] || langData[text]===undefined){
        return text;
    }

    return langData[text];
}

module.exports.__=loadLang;