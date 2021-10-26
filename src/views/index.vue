<template>
  <div>
    <el-container>
        <!--  头部导航栏    -->
        <el-header class="c4p-header-toolbar el-header" >
          <el-row :gutter="24" style="margin-top: 10px">
            <el-col :span="2">
              <a href="/">
                <img title="首页" alt="首页图片" src="../assets/title.png" style="height: 40px; width: 60px">
              </a>
            </el-col>
            <el-col :span="6">
              <el-button-group style="border: none; height: 100%">
                <el-button class="c4p-header-btn">博客</el-button>
                <el-button class="c4p-header-btn" >专栏</el-button>
                <el-button class="c4p-header-btn">插件</el-button>
                <el-button class="c4p-header-btn">分类</el-button>
                <el-button class="c4p-header-btn">分类</el-button>
              </el-button-group>
            </el-col>
            <!--          <el-col :span="1"><a title="正规博客" href="#">博客</a></el-col>-->
            <!--          <el-col :span="1"><a title="方便的来" href="#">专栏</a></el-col>-->
            <!--          <el-col :span="1"><a title="正规插件" href="#">插件</a></el-col>-->
            <!--          <el-col :span="1"><a title="正规分区" href="#">分类</a></el-col>-->
            <el-col :span="8">

                <div class="same div">
                  <!--  border-radius: 15px 15px 5px 5px;-->
                  <el-input
                      type="text"

                      style="border: none;border-radius: 0px"
                      class="same text"
                      placeholder="java8新特性"
                      v-model="input"
                      clearable />
                  <!--左上 右上  右下 左下     -->
                  <el-button style="border-radius: 0px 10px 10px 0px;" class="same btn" type="primary" icon="el-icon-search">搜索</el-button>
                </div>
            </el-col>

            <el-col :span="1">
              <a href="#" title="个人主页">
                <img title="" alt="个人头像" src="../assets/晚晚.png" style="height: 40px; width: 40px;border-radius:50%;">
              </a>
            </el-col>

            <el-col :span="5">
              <el-button-group style="border: none">
                <el-button class="c4p-header-btn">博客</el-button>
                <el-button class="c4p-header-btn" >专栏</el-button>
                <el-button class="c4p-header-btn">插件</el-button>
                <el-button class="c4p-header-btn">分类</el-button>

              </el-button-group>
            </el-col>
            <el-col :span="2">
              <el-button type="warning" plain>上传博客</el-button>
            </el-col>

          </el-row>

        </el-header>

      <el-container>
        <div style="height: 2000px; width: 100%; background-color: #fafafa;margin-top: 50px" >
          <el-main class="" style="margin-top: 1%">
            <el-row :gutter="20" style="margin-left: 5%">
              <el-col :span="2"> <el-link :underline="false" type="info" href="#" target="_blank">Python</el-link></el-col>
              <el-col :span="2"> <el-link :underline="false" type="info" href="#" target="_blank">Java</el-link></el-col>
              <el-col :span="2"> <el-link :underline="false" type="info" href="#" target="_blank">C/C++</el-link></el-col>
              <el-col :span="2"> <el-link :underline="false" type="info" href="#" target="_blank">前端</el-link></el-col>
              <el-col :span="2"> <el-link :underline="false" type="info" href="#" target="_blank">数据库</el-link></el-col>
              <el-col :span="2"> <el-link :underline="false" type="info" href="#" target="_blank">计算机基础</el-link></el-col>
              <el-col :span="2"> <el-link :underline="false" type="info" href="#" target="_blank">移动</el-link></el-col>
              <el-col :span="2"> <el-link :underline="false" type="info" href="#" target="_blank">AI</el-link></el-col>
              <el-col :span="2"> <el-link :underline="false" type="info" href="#" target="_blank">区块链</el-link></el-col>
              <el-col :span="2"> <el-link :underline="false" type="info" href="#" target="_blank">物联网</el-link></el-col>
              <el-col :span="2"> <el-link :underline="false" type="info" href="#" target="_blank">运维</el-link></el-col>
            </el-row>
          </el-main>
          <div class="aside-container" style="background-color: aqua">woow</div>
          <div class="aside-container"  style="background-color: #42c768">woow</div>
          <div class="aside-container" style="background-color: #e534a4">woow</div>
          <div class="aside-container" style="background-color: #a78521">woow</div>
        </div>
      </el-container>

    </el-container>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {

      input: '', // 头部导航栏搜索框
    }

  },
}
</script>

<style scoped>

/* 侧边容器 */
.aside-container {
  height: 500px;
  width: 400px;
  margin-left: 5%;
}

/* 搜索栏 */
.same{
  padding: 0;
  margin: 0;
  /*box-sizing: border-box;*/
  border: 0;
  height: 30px;
  width: 100%;
}
.div{
  width: 100%;
  height: 32px;
}
.text{
  width: 80%;
  border-right: none;
  height: 80%;
  background-color: #D3DCE6;


}
.btn{
  width: 20%;
  height: 125%;
  border-left: none;
  background-color: #59b3f3;
}

/* 头部工具栏 */
.c4p-header-toolbar {
  margin-top: -10px;
  /*防止被遮挡调到最大值*/
  z-index: 9999;
  /* 固定工具栏 */
  position:fixed;
  width: 100%;
  height: 50px;
  solid-color: rgba(55, 55, 58, 0.06);
  background-color: #ffffff;
  /*border: 1px;*/
  /*border-bottom-style: solid;*/
  /*box-shadow:1px 1px 1px #bdbdbd;*/
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
/*工具栏按钮*/
.c4p-header-btn {
  border: none;
  height: 100%;
}
/* 按钮 */
.el-button {
  outline:none;
}
.el-header {
  /*display: flex;*/
  /*position: fixed;*/
  /*align-items: center;*/
  /*justify-content: space-around;*/
}

.el-header, .el-footer {
  /*background-color: #B3C0D1;*/
  /*color: #333;*/
  /*text-align: center;*/
}



body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

</style>