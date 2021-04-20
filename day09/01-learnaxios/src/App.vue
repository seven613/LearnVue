<template>
  <div id="app">
    {{res}}    
  </div>
</template>

<script>
import {request} from './network/request'

export default {
  name: 'App',
  components: {
  },
  data () {
    return{
      res:''
    }
  },
  created() {
    request({
      url:'/home/multidata'
    }).then(res=>{
      this.res = res;
    })
  }
}
</script>

<style>

</style>
