<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="left">左边</div>
      <div slot="center">购物街</div>
      <div slot="right">右边</div>
    </nav-bar>
    <h2>首页</h2>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar
  },
  data () {
    return {
      result:null
    }
  },
  created () {
    //1.请求多个数据
    getHomeMultidata().then(res => {
      console.log(res)
      this.result = res;
    });
  }
};
</script>

<style scoped>
.home-nav {
  background-color: pink;
  color: #fff;
}
</style>
