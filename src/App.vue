<template>
  <div id="app">
    <h1>头条</h1>
    <div>
      <i class="toutiao toutiao-pinglun"></i>
    </div>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>

    <div class="box">
      <h2>Hello</h2>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
.box{
  width: 200px;
  height: 100px;
  font-size: 24px;
  background-color: pink;
}
</style>
