const path=require("path"); 

module.exports={
    entry:"./src/app.js",
    output:{
        filename:"bundle.js",
        path:path.join(__dirname,"public")
    },
    module:{
     rules:[{
         loader:"babel-loader",
         test:/\.js$/,
         exclude:/node_modules/
     }]
    },
    mode:"development",
    devServer:{
        contentBase:path.join(__dirname,"public"),
        port:9000
    }
};

// devtool:"eval", // for build code fastly
//or
// devtool:"eval-cheap-module-source-map", // for debugging the code