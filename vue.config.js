module.exports = {
  devServer: {
    port: 8081,
    proxy: {
      "/api": {
        target: "http://localhost:8090", // Spring Boot应用的地址
        changeOrigin: true,
        pathRewrite: { "/api": "" }, // 路径重写规则
      },
    },
  },
};
