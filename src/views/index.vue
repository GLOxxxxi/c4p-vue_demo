<template>
  <div class="all" id="all" style="height: 100%;">
   <el-container>
     <div class="main" id="main" style="width: 1300px">
       <el-main >
         <!--   页头导航栏      -->
         <el-row :gutter="20" style="margin-left: 10%;">
           <el-col :span="2">
			 <router-link to="/space">
				 个人空间入口
			 </router-link>
             <el-link :underline="false" type="info" href="#" target="_blank">
<!--               <button class="btn btn-outline-danger">bootstrap</button>-->
             </el-link>
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
  </div>
</template>

<script>
import '../static/css/main-contain.css'
import '../static/js/self-adaption'
import $ from "jquery"
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
    },
    jq: function(){
      console.log($)
    }

  },
  mounted() {
    this.jq()
  },

}
</script>

<style scoped>


/* 侧边容器 */
.aside-container {
  height: 430px;
  width: 100%;
  max-width: 1300px;

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