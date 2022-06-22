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

    <div class="neo4jMain">
      <div class="addContent">
        <el-form
          :inline="true"
          :model="formInline"
          :rules="rules"
          ref="neo4jform"
        >
          <el-form-item label="开始节点名称" prop="startNode">
            <el-input
              v-model="formInline.startNode"
              placeholder="请输入开始节点名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="关系名称" prop="relationName">
            <el-input
              v-model="formInline.relationName"
              placeholder="请输入关系名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="结束节点名称" prop="endNode">
            <el-input
              v-model="formInline.endNode"
              placeholder="请输入结束节点名称"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <!--          <el-button type="primary" @click="onDelete">清空表</el-button>-->
          </el-form-item>
        </el-form>
      </div>
      <div class="echarts" ref="echarts">//</div>
    </div>
    <div>
      <el-container>
        <el-button type="success" @click="draw">按钮</el-button>
        <div id = "viz"></div>
      </el-container>
    </div>
  </div>
</template>

<script>
import "../../static/css/main-contain.css";
import axios from "axios";
// import NeoVis from 'neovis.js/dist/neovis.js';
import NeoVis from 'neovis.js';

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
          container_id: "viz",
          server_url: "bolt://localhost:7687",
          server_user: "neo4j",
          server_password: "123456",
          labels: {
	                //"Character": "name",
            "Character": {
                "caption": "name",
                "size": "pagerank",
                "community": "community"
                //"sizeCypher": "MATCH (n) WHERE id(n) = {id} MATCH (n)-[r]-() RETURN sum(r.weight) AS c"
            },
            "Building" : {
              "caption" : "buildingName",
              "size": "pagerank",
              "image": 'https://visjs.org/images/visjs_logo.png',
              //"sizeCypher": "MATCH (n) WHERE id(n) = {id} MATCH (n)-[r]-() RETURN sum(r.weight) AS c"
            },
            "Floor":{
              "caption" : "floorName",
              "image": 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F01%2F83%2F63%2F596fd6c7494f3_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658459383&t=2bb9eaa86cced2219060251bd913c362'
            },
            "Room":{
              "caption" : "roomName"
            },
            "DistributionFrame": {
              "caption" : "frameNumber",
              "image":'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2Fd68b65cb8af65c5bbf09e652&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658459688&t=06b0d29e6eaa00edb12b507a9c7df7a8'

            },
            "Unit":{
              "caption":"unitNumber"
            },
            "Disc":{
              "caption":"discNumber",
              "size":"pagerank"
            },
            "Port": {
              "caption":"portNumber",
              "size":"pagerank",
              "color":"black"
            }
          },
          relationships: {
            "DistributionFrame2DistributionFrame" : {
              "caption":false,
              "thickness": "count",
              "value":false,
              "size": 0
            },
  
            "Disc2Port": {
                "thickness": "weight",
                "caption": false
            },
            "Building2Floor":{
              "caption":false
            },
            "Floor2Room": {
              "caption":false
            },
            "Room2DistributionFrame": {
              "caption":false
            },
            "DistributionFrame2Unit": {
              "thickness": "weight",
              "caption":false
            },
            "Unit2Disc":{
              "thickness": "weight",
              "caption":false
            },
            "Port2Port":{
              "thickness": "weight",
              "caption":false
            }
          },
          //查询节点的语句，写成你们的
          // initial_cypher: "MATCH p=(n:Building{buildingName:'建筑1'})-[*6]->(:Port)-[]->(:Port)<-[*6]-(:Building{buildingName:'建筑2'}) RETURN p;" 
            initial_cypher: "match p = (:Building{buildingName:'建筑1'})-[*]-(:Building{buildingName:'建筑2'}) where NONE(x in relationships(p) where type(x) = 'DistributionFrame2DistributionFrame') return p" ,
            arrows: true,
            hierarchical_layout:true,
            hierarchical_sort_method:"directed",


      };
   
      const viz = new NeoVis(config);
      viz.render();
    },



    // 连接图数据库
    connect() {
      return this.$neo4j
        .connect(
          this.protocol,
          this.host,
          this.port,
          this.username,
          this.password
        )
        .then((driver) => {
          // Update the context of your app
        });
    },
    // 图数据库驱动
    driver() {
      // Get a driver instance
      return this.$neo4j.getDriver();
    },
    // 图数据库语言
    testQuery() {
      // Get a session from the driver
      const session = this.$neo4j.getSession();

      // Or you can just call this.$neo4j.run(cypher, params)
      session
        .run(
          "MATCH p=(n:Building{buildingName:'建筑1'})-[*6]->(:Port)-[]->(:Port)<-[*6]-(:Building{buildingName:'建筑2'}) RETURN p;"
        )
        .then((res) => {
          console.log(res.records[0].get("p"));
        })
        .then(() => {
          session.close();
        });
    },
    onSubmit() {
      this.$refs.neo4jform.validate((valid) => {
        if (valid) {
          this.connect();
          const session = this.$neo4j.getSession();
          // let cypher = `Merge (n:Person{name: '${this.formInline.startNode}'})
          // Merge (m:Person{name: '${this.formInline.endNode}'}) Merge (n)-[r:${this.formInline.relationName}]->(m)`;
          let cypher =
            "MATCH p=(n:Building{buildingName:'建筑1'})-[*6]->(:Port)-[]->(:Port)<-[*6]-(:Building{buildingName:'建筑2'}) RETURN p;";
          session
            .run(cypher)
            .then(() => {
              this.formInline = {
                startNode: "",
                endNode: "",
                relationName: "",
              };
              this.query();
            })
            .then(() => {
              session.close();
            });
        }
      });
    },
    query() {
      this.connect();
      const session = this.$neo4j.getSession();
      // let cypher = `match p=(n:Person)-[]->(m:Person) return p limit 1000`;
      let cypher = `MATCH p=(n:Building{buildingName:'建筑1'})-[*6]->(:Port)-[]->(:Port)<-[*6]-(:Building{buildingName:'建筑2'}) RETURN p`;
      session
        .run(cypher)
        .then((res) => {
          let records = res.records;
          console.log(records);
          debugger;
          let nodes = new Set();
          this.nodesRelation = [];
          for (let i = 0; i < records.length; i++) {
            if(i != 0) {
              break;
            }
            for (let x = 0; x < records[i]._fields[0].segments.length; x++) {
              let start = records[i]._fields[0].segments[x].start;
              let end = records[i]._fields[0].segments[x].end;
              let sourceName;
              let targetName;
              sourceName = this.getName(start, sourceName);
              targetName = this.getName(end, targetName);
             
              nodes.add(sourceName);
              nodes.add(targetName);
              this.nodesRelation.push({
                source: sourceName,
                target: targetName,
                lineStyle: {
                  curveness: 0,
                },
                label: {
                  show: true,
                  formatter: function () {
                    // return records[i]._fields[0].segments[x].relationship.type;
                    return "";
                  },
                },
              });
            }
          }
          let curveness = [0, 0.4, -0.4, 0.3, -0.3, 0.2, -0.2, 0.1, -0.1];
          for (let c = 0; c < this.nodesRelation.length; c++) {
            let repeatNumber = 0;
            for (let s = c + 1; s < this.nodesRelation.length; s++) {
              let r1 = this.nodesRelation[c];
              let r2 = this.nodesRelation[s];
              if (r1.source === r2.source && r1.target === r2.target) {
                repeatNumber = repeatNumber + 1;
              } else if (r1.target === r2.source && r1.source === r2.target) {
                repeatNumber = repeatNumber + 1;
              }
            }
            this.nodesRelation[c].repeatNumber = repeatNumber;
          }
          for (let v = 0; v < this.nodesRelation.length; v++) {
            console.log(this.nodesRelation[v].repeatNumber);
            this.nodesRelation[v].lineStyle.curveness =
              curveness[this.nodesRelation[v].repeatNumber];
          }

          this.echartsData = [];

          nodes.forEach((e) => {
            let index = Math.ceil(Math.random() * 10);
            let color = () => {
              if (index % 4 === 0) {
                return "#228B22";
              } else if (index % 4 === 1) {
                return "#FFFF00";
              } else if (index % 4 === 2) {
                return "#20B2AA";
              } else if (index % 4 === 3) {
                return "#FFB6C1";
              }
              return "#87CEFA";
            };
            this.echartsData.push({
              name: e,
              x: Math.random() * 100,
              y: Math.random() * 100,
              itemStyle: {
                color: color(),
              },
            });
          });
          console.log(this.echartsData)
          this.initEcharts();
        })
        .then(() => {
          session.close();
        });
    },
    getName(node, name) {
      switch(node.labels[0]) {
        case 'Building': name = node.properties.buildingName;
        break;
        case 'Floor': name = node.properties.floorName;
        break;
        case 'Room' : name = node.properties.roomName;
        break;
        case 'DistributionFrame' : name = node.properties.frameNumber; 
        break;
        case 'Unit' : name = node.properties.unitNumber.low;
        break;
        case 'Disc' : name = node.properties.discNumber.low;
        break;
        case 'Port' : name = node.properties.portNumber.low;
        break;
        default: name = ''; break
      }
      return name;
    },
    initEcharts() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.echarts);
      // 绘制图表
      myChart.setOption({
        title: {
          text: "Neo4j 图谱关系",
        },
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        series: [
          {
            type: "graph",
            layout: "force",
            force: {
              edgeLength: 40,
              repulsion: 50,
              gravity: 0.1,
            },
            symbolSize: 50,
            roam: true,
            label: {
              show: true,
            },
            edgeSymbol: ["circle", "arrow"],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
              fontSize: 20,
            },
            data: this.echartsData,
            // links: [],
            links: this.nodesRelation,
            lineStyle: {
              opacity: 0.9,
              width: 2,
              curveness: 0,
            },
          },
        ],
      });
    },
    onDelete() {
      this.connect();
      const session = this.$neo4j.getSession();
      let cypher = `match p=(n:Person)-[]->(m:Person) delete p `;
      session.run(cypher);
      cypher = `MATCH (n:Person) delete n`;
      session.run(cypher).then(() => {
        session.close();
      });
      this.query();
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
.neo4jMain {
  height: 100%;
  display: flex;
  flex-direction: column;
  .addContent {
    padding: 20px;
    box-shadow: -10px 0 10px #d3d3d3, /*左边阴影*/ 10px 0 10px #d3d3d3,
      /*右边阴影*/ 0 -10px 10px #d3d3d3, /*顶部阴影*/ 0 10px 10px #d3d3d3;
  }

  .echarts {
    background-color: #333;
    flex: 1;
    flex-grow: 1;
  }
}
#viz {
  width: 2000px;
  height: 700px;
  border: 1px solid lightgray;
  font: 22pt arial;
}
</style>
