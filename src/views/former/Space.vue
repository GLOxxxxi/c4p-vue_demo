<template>
<div>
  <el-button type="danger" @click="personalSpace">控制台see see</el-button>
  <label> 昵称：{{space.nickname}}</label>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "Space",
  data() {
    return {
      space:{}, // 个人信息
    }

  },
  methods:{
    personalSpace() {
      console.log(1)

      axios({
        methods: 'get',
        url: '/user/1',
        // baseURL: 'http://localhost:8082' // 能直接访问后端 路径 http://localhost:8082/user/1
        baseURL: '/api' // 路径 http://localhost:8081/api/user/1
        // params: {
        //   id:1
        // }
      }).then(this.showMessage)
    },
    showMessage(res) {
      console.log(res.data.data.user)
      this.space = res.data.data.user
    }
  }
}
</script>

<style scoped>

</style>