<template>
  <el-main id="indexMain">
    <el-card class="box-card" id="loginCard">
      <div slot="header" class="clearfix">
        <span>系统登入</span>
        <el-button style="float: right; padding: 3px 0" type="text"
          >找回密码</el-button
        >
      </div>
      <div id="loginContent">
        <el-input placeholder="请输入账号" clearable v-model="user.username"></el-input>
        <el-input placeholder="请输入密码" clearable v-model="user.password" show-password></el-input>
        <el-link href="http://www.4399.com/?hao360a" target="_blank"><el-button id="loginSystem">登入</el-button></el-link>
      </div>
    </el-card>
  </el-main>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
};
</script>

<style>
#loginCard {
  width: 400px;
  margin: 0 auto;
  margin-top: 100px;
}
#loginContent {
  text-align: center;
}
#loginContent > * {
  margin-top: 5px;
}
#loginSystem {
  background-color: #0a9588;
  color: white;
  width: 75px;
  display: inline-block;
}
</style>
