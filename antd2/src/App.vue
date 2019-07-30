<template>
  <div id="app">
    <div id="nav" style="border: 1px solid #ccc;background: #000" >
      <div id="title" style="background: #1E90FF;height: 60px;line-height: 60px;">
       <h3>某某后台1.1</h3>
      </div>
        <div class="nav_left">
            <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            </el-radio-group>
            <el-menu
                    :default-active="$route.path"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    :collapse="isCollapse"
                    style="text-align: left;background: #606266;"
                    text-color="#fff"
                    active-text-color="#000"
                    menu-trigger="click"
                    router >
                <el-menu-item index="/"  background-color="#ff0">
                    <i class="el-icon-s-home"></i>
                    <span slot="title" >概况</span>
                </el-menu-item>
                <el-menu-item index="/customermanagement">
                    <i class="el-icon-user-solid"></i>
                    <span slot="title" >客户管理</span>
                </el-menu-item>
                <el-menu-item index="/order" >
                    <i class="el-icon-document"></i>
                    <span slot="title">订单管理</span>
                </el-menu-item>
                <el-menu-item index="/service">
                    <i class="el-icon-goods"></i>
                    <span slot="title">商品与服务管理</span>
                </el-menu-item>
                <el-menu-item index="/QR">
                    <i class="el-icon-setting"></i>
                    <span slot="title">二维码管理</span>
                </el-menu-item>
                <el-menu-item index="/about">
                    <i class="el-icon-setting"></i>
                    <span slot="title">系统设置</span>
                </el-menu-item>
            </el-menu>

        </div>

    </div>
    <router-view/>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                isCollapse: false
            };
        },
        methods: {

            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style lang="scss">
#app {
  padding-left:160px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-menu-item.is-active {
    background-color: #fff !important;
}
#nav {
  padding: 0;
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 160px;
  height: 100%;
  #title {
    width: 100%;
    height: 48px;
    line-height: 48px;
    margin-top: -20px;
  }
  #nav_left{
    padding-top: 10px;
  div{
    padding-top: 28px;
  }
  }

  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
