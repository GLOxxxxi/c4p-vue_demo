<template>
<div>
	<el-container>
		<div class="main">
		<el-button type="danger" @click="personalSpace">控制台see see</el-button>
		
		<label> 昵称：{{space.nickname}}</label>	
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
      space:{}, // 个人信息
    }

  },
  methods:{
    personalSpace() {
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
    }
  }
}
</script>

<style scoped>

</style>