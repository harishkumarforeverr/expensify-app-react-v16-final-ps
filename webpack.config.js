const path=require("path"); 
const miniCssExtractPlugin =require("mini-css-extract-plugin"); 

module.exports=(env)=>{  
    // console messages
    console.log(env.production?
    "its look like we are running build in porduction mode"
    :"its look like we are running build in development mode");

    // return body
    return {
        entry:"./src/app.js",
        output:{
            filename:"bundle.js",
            path:path.join(__dirname,"public")
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
       devtool:env.production?"source-map":"inline-source-map", // for debugging the code
        mode:env.production?"production":"development",
        devServer:{
            contentBase:path.join(__dirname,"public"),
            // contentBasePublicPath:path.join(__dirname,"public","dist"),
            port:9000,
            historyApiFallback:true
        },
        plugins : [
            new miniCssExtractPlugin({
              filename:"styles.css"
            })
        ]
    };
}

// devtool:"eval", // for build code fastly