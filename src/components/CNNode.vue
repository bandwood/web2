<template>
  <div id="cnnodeWrapper">
    <div>
      <span>cnnode论坛</span>
    </div>
    <div>
        <li v-for="(value,index2) in this.topicsArr"
        :key="index2">
        <span>
            <img id="avater" :src="value.author.avater_url">
            </span>
    {{value.title}}
        </li>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
        topicsArr:[]
        }
  },
  beforeCreate() {
    // console.log("this is before")
  },
  created() {
      let that=this;
    // console.log("this is vue")
  
    Axios.get('https://cnodejs.org/api/v1/topics').then(function (response) {
        that.topicsArr=response.data
    //   console.log(Response);
    if(response.data.success){
that.topicsArr=response.data.data
    }
    })
  }
}
</script>

<style>
#avater{
    width:20px;
    height:20px;
}
</style>