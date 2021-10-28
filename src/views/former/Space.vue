<template>
  <div id="app">
    <el-container>
      <div class="main">
        <img alt="个人头像" src="../../assets/晚晚.png" style="border-radius:50%;width: 300px;height: 300px">
        <label>{{ space.nickname }}</label>
        <el-button type="danger" @click="personalSpace">控制台see see</el-button>

        <label> 昵称：{{ space.nickname }}</label>
      </div>
    </el-container>
  </div>
</template>

<script>
import '../../static/css/main-contain.css'
import axios from "axios";

export default {

  name: "Space",
  data() {
    return {
      space: {}, // 个人信息
    }

  },
  methods: {
    personalSpace: async function () {
      console.log(1)
      axios({
        methods: 'get', // 请求方法
        url: '/user/1', // 请求路径
        baseURL: '/api' // 路径 http://localhost:8081/api/user/1
        // params: { // 需要携带的参数
        //   id:1
        // }
      }).then(this.showMessage)
    },
    showMessage(res) {
      console.log(res.data.data.user)
      this.space = res.data.data.user

    },
    getScreen: function () {
      const screenWidth = window.screen // 获取当前屏幕对象
      console.log(screenWidth.width) // 屏幕宽度
	  // dom操作只能在加载完界面之后执行，所以不能在create函数中，可以放在mounted函数中
    //   document.getElementById("app").setAttribute("style","width: 1920px;")
      // .setAttribute("style", "width: 1920px")
    }

  },
  // 生命周期之加载时就调用的方法
  created() {
    this.personalSpace();

  },
  // 安装
  mounted() {
    this.getScreen()
  }

}
</script>

<style scoped>

</style>