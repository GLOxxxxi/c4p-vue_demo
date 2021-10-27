<template>
  <div>
    <el-container>
      <!--  头部导航栏    -->
      <el-header class="c4p-header-toolbar">
        <el-row :gutter="24" style="margin-top: 10px">
          <el-col :span="2">
            <a href="/">
              <img title="首页" alt="首页图片" src="../assets/title.png" style="height: 40px; width: 60px">
            </a>
          </el-col>
          <el-col :span="6">
            <el-button-group style="border: none; height: 100%">
              <el-button class="c4p-header-btn">博客</el-button>
              <el-button class="c4p-header-btn">专栏</el-button>
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
                  clearable/>
              <!--左上 右上  右下 左下     -->
              <el-button style="border-radius: 0px 10px 10px 0px;" class="same btn" type="primary"
                         icon="el-icon-search">搜索
              </el-button>
            </div>
          </el-col>

          <el-col :span="1">
            <router-link href="/space" title="个人主页" to="/space">
              <img title="" alt="个人头像" src="../assets/晚晚.png" style="height: 40px; width: 40px;border-radius:50%;">
            </router-link>
          </el-col>

          <el-col :span="5">
            <el-button-group style="border: none">
              <el-button class="c4p-header-btn">博客</el-button>
              <el-button class="c4p-header-btn">专栏</el-button>
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
        <div style=" width: 100%; background-color: #fafafa;margin-top: 1px">
          <el-main class="" style="margin-top: 0;width: 1430px">
            <!--   页头导航栏      -->
            <el-row :gutter="20" style="margin-left: 10%;">
              <el-col :span="2">
                <el-link :underline="false" type="info" href="#" target="_blank">Python</el-link>
              </el-col>
              <el-col :span="2">
                <el-link :underline="false" type="info" href="#" target="_blank">Java</el-link>
              </el-col>
              <el-col :span="2">
                <el-link :underline="false" type="info" href="#" target="_blank">C/C++</el-link>
              </el-col>
              <el-col :span="2">
                <el-link :underline="false" type="info" href="#" target="_blank">前端</el-link>
              </el-col>
              <el-col :span="2">
                <el-link :underline="false" type="info" href="#" target="_blank">数据库</el-link>
              </el-col>
              <el-col :span="2">
                <el-link :underline="false" type="info" href="#" target="_blank">计算机基础</el-link>
              </el-col>
              <el-col :span="2">
                <el-link :underline="false" type="info" href="#" target="_blank">移动</el-link>
              </el-col>
              <el-col :span="2">
                <el-link :underline="false" type="info" href="#" target="_blank">AI</el-link>
              </el-col>
              <el-col :span="2">
                <el-link :underline="false" type="info" href="#" target="_blank">区块链</el-link>
              </el-col>
              <el-col :span="2">
                <el-link :underline="false" type="info" href="#" target="_blank">物联网</el-link>
              </el-col>
              <el-col :span="2">
                <el-link :underline="false" type="info" href="#" target="_blank">运维</el-link>
              </el-col>
            </el-row>
          </el-main>
          <div class="aside-container">
            <!--     轮播图       -->
            <!--      interval属性控制翻页时间      -->
            <el-carousel :interval="5000" type="card">
              <el-carousel-item v-for="(item, index) in rotation" :key="index">
                <a href="#" style="height: 100%; width: 100%">
                  <img alt="轮播图" :src="item.value" style="width: 100%; height: 100%">
                </a>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="aside-container" style="background-color: #42c768">
            <div style="margin-left: 0;width: 300px;background-color: #f2f2f2">
              <!-- 树形结构 -->
              <el-tree :data="sideTree" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
            </div>

          </div>
          <div class="aside-container" style="background-color: #e534a4">woow</div>
        </div>
      </el-container>

      <!--  页脚    -->
      <el-footer style="width: 1510px;height: 300px; background-color: #2c3e50">
        <el-row :gutter="20" style="width: 1000px;margin-left: 300px;margin-top: 2%">
          <el-col :span="5">
            <el-link :underline="false" icon="el-icon-user-solid">el-icon-user-solid</el-link>
            <el-link :underline="false" icon="el-icon-user">el-icon-user</el-link>
            <el-link :underline="false" icon="el-icon-phone">el-icon-phone</el-link>
            <el-link :underline="false" icon="el-icon-phone-outline">el-icon-phone-outline</el-link>
            <el-link :underline="false" icon="el-icon-goods">el-icon-goods</el-link>
          </el-col>
          <el-col :span="5">
            <el-link :underline="false" icon="el-icon-success">el-icon-success</el-link>
            <el-link :underline="false" icon="el-icon-error">el-icon-error</el-link>
            <el-link :underline="false" icon="el-icon-check">el-icon-check</el-link>
            <el-link :underline="false" icon="el-icon-close">el-icon-close</el-link>
            <el-link :underline="false" icon="el-icon-upload2">el-icon-upload2</el-link>
          </el-col>
          <el-col :span="5">
            <el-link :underline="false" icon="el-icon-download">el-icon-download</el-link>
            <el-link :underline="false" icon="el-icon-s-platform">el-icon-s-platform</el-link>
            <el-link :underline="false" icon="el-icon-s-promotion">el-icon-s-promotion</el-link>
            <el-link :underline="false" icon="el-icon-s-home">el-icon-s-home</el-link>
            <el-link :underline="false" icon="el-icon-user-solid">el-icon-user-solid</el-link>
          </el-col>
          <el-col :span="5">
            <el-link :underline="false" icon="el-icon-user-solid">el-icon-user-solid</el-link>
            <el-link :underline="false" icon="el-icon-user-solid">el-icon-user-solid</el-link>
            <el-link :underline="false" icon="el-icon-user-solid">el-icon-user-solid</el-link>
            <el-link :underline="false" icon="el-icon-user-solid">el-icon-user-solid</el-link>
            <el-link :underline="false" icon="el-icon-user-solid">el-icon-user-solid</el-link>
          </el-col>
        </el-row>
      </el-footer>

    </el-container>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      input: "", // 头部导航栏搜索框
      rotation: [
        {
          value: require('../assets/OIP-C (1).jpg'), // 图片地址
          label: '晚晚.png', // 图片名称
        },
        {
          value: require('../assets/colorful1.jpg'),
          label: 'title.png',
        },
        {
          value: require('../assets/colorful2.jpg'),
          label: 'title.png',
        },
        {
          value: require('../assets/colorful3.jpg'),
          label: 'title.png',
        },
        {
          value: require('../assets/colorful4.jpg'),
          label: 'title.png',
        }
      ], // 轮播图
      sideTree: [ // 侧边树形导航
        {
          label: 'Java',
          children: [{
            label: 'JavaSE',
            children: [{
              label: 'ee学习'
            }]
          }, {
            label: 'JavaEE',
            children: [{
              label: 'se学习'
            }]
          }],

        }, {
          label: 'C++',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        },
        {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          },
            {
              label: '二级 3-2',
              children: [{
                label: '三级 3-2-1'
              }]
            }]
        },
        {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          },
            {
              label: '二级 3-2',
              children: [{
                label: '三级 3-2-1'
              }]
            }]
        },
        {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          },
            {
              label: '二级 3-2',
              children: [{
                label: '三级 3-2-1'
              }]
            }]
        },
        {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          },
            {
              label: '二级 3-2',
              children: [{
                label: '三级 3-2-1'
              }]
            }]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }

  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    }
  }
}
</script>

<style scoped>
/* li标签去除列表项 */
li {
  list-style: none;
}

/* 侧边容器 */
.aside-container {
  height: 430px;
  width: 1350px;
  margin-left: 5%;
}

/* 搜索栏 */
.same {
  padding: 0;
  margin: 0;
  /*box-sizing: border-box;*/
  border: 0;
  height: 30px;
  width: 100%;
}

.div {
  width: 100%;
  height: 32px;
}

.text {
  width: 80%;
  border-right: none;
  height: 80%;
  background-color: #D3DCE6;


}

.btn {
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
  /* 固定工具栏 上下滚动固定位置，左右滚动正常 */
  position: sticky;
  top: -1px;

  width: 1510px;
  height: 50px;
  solid-color: rgba(55, 55, 58, 0.06);
  background-color: #ffffff;

  /* 设置阴影 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}

/*工具栏按钮*/
.c4p-header-btn {
  border: none;
  height: 100%;
}

/* 按钮 */
.el-button {
  outline: none;
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

/* 轮播图 */
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>