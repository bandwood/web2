<template>
  <div id="headerBook">
    <div id="headerTitle">
      <span>
        {{ message }}
      </span>
    </div>
    <div id="headerFunction">
      <el-row>
        <router-link to="/main">
          <el-button id="a">系统登入</el-button>
        </router-link>
        <router-link to="/work">
          <el-button id="a">工作中心</el-button>
        </router-link>
        <router-link to="student">
          <el-button id="a">学生信息查询</el-button>
        </router-link>
        <router-link to="/book">
          <el-button id="a">图书信息查询</el-button>
        </router-link>
        <router-link to="/cnnode">
          <el-button id="a">cnnode论坛</el-button>
        </router-link>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerBook",
  data() {
    return {
      message: "江西软件大学-新型图书管理系统",
    };
  },
};
</script>

<style>
#headerbook{
  background-color:teal;
}
#headerTitle {
  width: 400px;
  height: 100%;
  color: white;
  font-size: 24px;
  font-weight: bolder;
  line-height: 60px;
  display: inline-block;
}
#headerFunction {
  float: right;
  display: inline-block;
  line-height: 60px;
  font-size: 8px;
  color:teal;
}
#headerFunction > .el-button {
  display: inline-block;
  margin-top: 8px;
  background-color: #0a9588;
  border-color: #0a9588;
}
#a{
  background-color: #0a9588;
  color: white;
  display: inline-block;
  margin: 5px;
}
</style>
