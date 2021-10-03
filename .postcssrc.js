/*
 * PostCSS 配置文件
 */

module.exports = {
  plugins: {
    'postcss-pxtorem': {
      // lib-flexible 的 REM 适配方案，把一行分为10份，每份就是十分之一
      // 所以 rootValue 应该设置为你的设计稿宽度的十分之一
      // 我们设计稿750像素，所以应该设置为750 / 10 = 75 
      // 下面判断是为了兼容 vant 以及实际设计稿750宽度
      rootValue({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },

      // 配置转换的CSS属性  *表示所有
      propList: ['*']
    }
  }
}