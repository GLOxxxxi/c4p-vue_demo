<template>
  <div class="all" id="all" style="height: 100%;">
    <el-container>
      <div class="main" id="main" style="width: 1300px">
        <img alt="个人头像" src="../../assets/晚晚.png" style="border-radius:50%;width: 300px;height: 300px">
<!--        <label>{{ space }}</label>-->
        <el-button type="danger" @click="personalSpace">控制台see see</el-button>

        <label> 昵称：{{ nickname }}</label>
      </div>
    </el-container>
  </div>
</template>

<script>
import '../../static/css/main-contain.css'
import axios from "axios";
import {getUserById} from "../../api/api";
import {getUsers} from "../../api/api";

export default {

  name: "Space",
  data() {
    return {
      space: {}, // 个人信息
      nickname: '',
    }

  },
  methods: {
    personalSpace: async function () {
      // debugger
      const {data} = await getUsers(1, 5)
      console.log(data)
      axios({
        methods: 'get', // 请求方法
        // url: '/users/1', // 请求路径
        // baseURL: '/api' // 路径 http://localhost:8081/api/users/1
        baseURL: 'http://172.16.6.144:8082/users/1' // 路径 http://localhost:8081/api/users/1
        // params: { // 需要携带的参数
        //   id:1
        // }
      }).then(this.showMessage)
    },
    showMessage(res) {
      console.log(res.data.data)
      this.space = res.data.data
      this.nickname = this.space.nickname

    },
  },
  // 生命周期之加载时就调用的方法
  created() {
    // this.personalSpace();

  },
  // 安装
  mounted() {
  }

}
</script>

<style scoped>

</style>