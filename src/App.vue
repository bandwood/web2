<template>
  <el-container>
    <el-header><Header /></el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer><Footer /></el-footer>
  </el-container>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
// import Book from "./components/Book.vue";
import CNNode from "./components/CNNode.vue";
// import Work from "./components/Work.vue";
// import Student from "./components/Student.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
    CNNode,
    // Work,
    // Student,
  },
};
</script>
<style>
* {
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.el-header {
  background-color: #244152;
}
</style>
