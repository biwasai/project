<template>
  <div id="app">
    <!-- header区域 -->
    <mt-header :title="header">
    </mt-header>
    <!-- 路由组件的出口 -->
    <router-view/>
    
    <!-- footer 区域 -->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img slot="icon" src="./assets/logo.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="vip">
        <img slot="icon" src="./assets/logo.png">
        vip
      </mt-tab-item>
      <mt-tab-item id="list">
        <img slot="icon" src="./assets/logo.png">
        列表
      </mt-tab-item>
      <mt-tab-item id="shop">
        <img slot="icon" src="./assets/logo.png">
        购物
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      selected:'',
      header:'header'
    }
  },
  watch:{
    selected:function(newV,oldV){
      console.log(newV,oldV)
      console.log(this.selected)

      this.$router.push({name:this.selected})
    }
  },
  methods: {
   
  }
}
</script>

<style>
*{
  padding:0;
  margin: 0;
}
</style>
