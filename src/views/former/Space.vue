<template>
  <div class="all" id="all" style="height: 100%">
    <el-container>
      <div class="main" id="main" style="width: 1300px">
        <img
          alt="个人头像"
          src="../../assets/晚晚.png"
          style="border-radius: 50%; width: 300px; height: 300px"
        />
        <!--        <label>{{ space }}</label>-->
        <!-- <el-button type="danger" @click="personalSpace">控制台see see</el-button> -->

        <label> 昵称：{{ nickname }}</label>
      </div>
    </el-container>
    <div>
      <el-container>
        <el-button type="success" @click="draw">按钮</el-button>
        <div id="viz"></div>
      </el-container>
    </div>
  </div>
</template>

<script>
import "../../static/css/main-contain.css";
import axios from "axios";
// import NeoVis from 'neovis.js/dist/neovis.js';
import NeoVis from "neovis.js";

import { getUserById } from "../../api/api";
import { getUsers } from "../../api/api";
// import {default} from '../../static/js/neovis';
export default {
  name: "Space",
  data() {
    return {
      formInline: {
        startNode: "1",
        endNode: "1",
        relationName: "1",
      },
      rules: {
        startNode: [{ required: true, trigger: "blur" }],
        endNode: [{ required: true, trigger: "blur" }],
        relationName: [{ required: true, trigger: "blur" }],
      },
      space: {}, // 个人信息
      nickname: "",
      protocol: "bolt",
      host: "localhost",
      port: 7687,
      username: "neo4j",
      password: "123456",
      echartsData: [],
      nodesRelation: [],
      viz: {}, //定义一个viz对象
    };
  },
  methods: {
    draw() {
      var config = {
        // 盒子id
        container_id: "viz",
        // 图数据库地址
        server_url: "",
        // 图数据库账号
        server_user: "",
        // 图数据库密码
        server_password: "",
        // 节点配置
        labels: {
          //"Character": "name",
          Character: {
            caption: "name",
            size: "pagerank",
            community: "community",
            //"sizeCypher": "MATCH (n) WHERE id(n) = {id} MATCH (n)-[r]-() RETURN sum(r.weight) AS c"
          },
          // 节点名称
          Building: {
            // 展示名称
            caption: "buildingName",
            // 
            size: "pagerank",
            // 图标
            image: "https://visjs.org/images/visjs_logo.png",
            //"sizeCypher": "MATCH (n) WHERE id(n) = {id} MATCH (n)-[r]-() RETURN sum(r.weight) AS c"
          },
          Floor: {
            caption: "floorName",
            // image:
              // "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F01%2F83%2F63%2F596fd6c7494f3_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658459383&t=2bb9eaa86cced2219060251bd913c362",
          },
          Room: {
            caption: "roomName",
          },
          DistributionFrame: {
            caption: "frameNumber",
            image:
              "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2Fd68b65cb8af65c5bbf09e652&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658459688&t=06b0d29e6eaa00edb12b507a9c7df7a8",
          },
          Unit: {
            caption: "unitNumber",
          },
          Disc: {
            caption: "discNumber",
            size: "pagerank",
          },
          Port: {
            caption: "portNumber",
            size: "pagerank",
            color: "black",
          },
        },
        // 关系
        relationships: {
          // 关系名称
          Disc2Port: {
            // 宽度
            thickness: "weight",
            // 展示名称
            caption: false,
          },
          Building2Floor: {
            caption: false,
          },
          Floor2Room: {
            caption: false,
          },
          Room2DistributionFrame: {
            caption: false,
          },
          DistributionFrame2Unit: {
            thickness: "weight",
            caption: false,
          },
          Unit2Disc: {
            thickness: "weight",
            caption: false,
          },
          Port2Port: {
            thickness: "weight",
            caption: false,
          },
        },
        //查询节点的语句，写成你们的
        // initial_cypher: "MATCH p=(n:Building{buildingName:'建筑1'})-[*6]->(:Port)-[]->(:Port)<-[*6]-(:Building{buildingName:'建筑2'}) RETURN p;"
        // 执行的初始化cypher语言
        initial_cypher:
          "match p = (:Building{buildingName:'建筑1'})-[*]-(:Building{buildingName:'建筑4'}) where NONE(x in relationships(p) where type(x) = 'DistributionFrame2DistributionFrame') return p",
        // 是否展示箭头
        arrows: true,
        // 布局方式
        hierarchical_layout: true,
        // 布局排序方法
        hierarchical_sort_method: "directed",
      };
      config.server_url = "bolt://localhost:7687"
      config.server_user = "neo4j"
      config.server_password = "123456"
      // 创建Neovis对象
      const viz = new NeoVis(config);
      // 执行操作
      viz.render();
    },

   
  },
  // 生命周期之加载时就调用的方法
  created() {
    // this.personalSpace();
  },
  // 安装
  mounted() {
    // this.connect();
  },
};
</script>

<style scoped lang="less">
#viz {
  width: 2000px;
  height: 700px;
  border: 1px solid lightgray;
  font: 22pt arial;
}
</style>
