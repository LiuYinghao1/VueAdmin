const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    open:true,
    port:4618,
    https:false,
    host:'localhost',
    proxy:{
      
    }
  }
})
