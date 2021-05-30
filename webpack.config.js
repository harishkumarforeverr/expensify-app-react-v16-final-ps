const path=require("path"); 
const webpack=require("webpack");
const miniCssExtractPlugin =require("mini-css-extract-plugin"); 

module.exports=(env)=>{  
    // console messages 
    if(process.env.NODE_ENV=="testing"){ 
        require("dotenv").config({ path:".env.testing" });
    } else if(process.env.NODE_ENV=="development"){ 
      require("dotenv").config({ path:".env.development" }); 
    }  
    console.log(env.production?
    "its look like we are running build in porduction mode"
    :"its look like we are running build in development mode");

    // return body
    return {
        entry:"./src/app.js",
        output:{
            filename:"bundle.js",
            path:path.join(__dirname,"public","dist")
        },
        module:{
         rules:[
        {
             loader:"babel-loader",
             test:/\.js$/,
             exclude:/node_modules/
         }, 
         {
            test:/\.s?css$/,
            use : [
              miniCssExtractPlugin.loader,
              {
                loader :'css-loader',
                options:{
                   sourceMap:true,
                    url:false
                }
              },
              {
                loader:'sass-loader',
                options:{
                  sourceMap:true
                }
              } 
            ] 
          } 
        ]
        },
      //  devtool:env.production?"source-map":"inline-source-map", // for debugging the code
        mode:env.production?"production":"development",
        devServer:{
            contentBase:path.join(__dirname,"public"),
            publicPath:"/dist/",
            port:9000,
            historyApiFallback:true
        },
        plugins : [
            new miniCssExtractPlugin({
              filename:"styles.css"
            }),
            new webpack.DefinePlugin({
              "process.env.FIREBASE_API_KEY":JSON.stringify(process.env.FIREBASE_API_KEY),
              "process.env.FIREBASE_AUTH_DOMAIN":JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
              "process.env.FIREBASE_URL":JSON.stringify(process.env.FIREBASE_URL),
              "process.env.FIREBASE_PROJECT_ID":JSON.stringify(process.env.FIREBASE_PROJECT_ID),
              "process.env.FIREBASE_STORAGE_BUCKET":JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
              "process.env.FIREBASE_MESSAGING_SENDER_ID":JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
              "process.env.FIREBASE_APP_ID":JSON.stringify(process.env.FIREBASE_APP_ID),
              "process.env.FIREBASE_MEASUREMENT_ID":JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID),

            })
        ]
    };
}

// devtool:"eval", // for build code fastly