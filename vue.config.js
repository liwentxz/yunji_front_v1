module.exports = {
  lintOnSave: false,
    devServer: {
        proxy: {
            '/platform': {
                target:'http://test.yikj.com.cn/',
                changeOrigin:true,
                // pathRewrite: {
                //     '^/platform':''
                // }
            }
        }
    },

    publicPath: './',
    //Solution For Issue:You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
    runtimeCompiler: true,
    configureWebpack: (config) => {
      config["performance"] = {
        "maxEntrypointSize": 10000000,
        "maxAssetSize": 30000000,
      }
    },
    chainWebpack: config => {
      config
        .plugin('html')
        .tap(args => {
          //args[0].title= '' // 设置title
          return args
        })
    } 
  }