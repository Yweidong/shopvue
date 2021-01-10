<template>
  <div id="midone">
    <div class="w">
      <div id="logo" class="logo"></div>
      <div id="search">
        <div class="search-m">
          <div class="form">

            <input type="text" placeholder="请输入内容" class="input-with-select"/>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </div>

          <div id="settleup" class="dropdown">
            <div class="cw-icon">
              <img class="che" src="@/assets/images/homecart.png" alt="">
              <span class="mycart" @click="toMycart">我的购物车</span>
              <i class="ci-count">{{cartcount}}</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    components: {
      // HomeRoofBarTab,
      // HomeRoofGuide

    },
    data () {
      return {
        cartcount: 0,
      }
    },
    computed: {

    },
    methods: {
      toMycart() {
        console.log("222");
      }
    }
  }
</script>
<style>
  #midone{
    background: #fff;
    border-botton: 1px solid #ddd;

  }
  .w{
    position: relative;
    z-index: 11;
    height: 140px;
    margin: auto;
    background: #42b983;
  }
  #logo {
    position: absolute;
    z-index:2;
    left: 0;
    top: 10px;
    height: 120px;
    width: 200px;
    background-color: #C81623;
  }
  .search-m{
    position: relative;
    z-index: 1;
    height: 60px;
    background-color: antiquewhite;
  }
  .search-m .form{
    position: absolute;
    top: 25px;
    height: 32px;
    width:400px;
    border: 2px solid #e2231a;
    background: white;
    margin-left: 250px;
  }

  .input-with-select{
    width: 340px ;
    left: 0;
    height: 25px ;
    margin-left: -2px ;
    padding: 3px 40px 2px 15px ;
    /*height: 26px !important;*/
    border: none;


    /*border: 1px solid transparent !important;*/
    line-height: 26px ;
    font-size: 12px ;
  }
  .input-with-select:focus{
    border: none;
    box-shadow: none;
    outline: none;
  }
  .el-button{
    position: absolute;
    width: 50px !important;
    height: 32px !important;
    right: 0px !important;
    top: 0px !important;
    border: 0 !important;

  }
  #settleup{
    right: 60px;
    position: absolute;
    top:25px;
    z-index: 21;
  }
  #settleup .cw-icon{
    width: 130px;
    height: 34px;
    background: #fff;
    text-align: center;
    line-height: 34px;
    border: 1px solid #eee;

  }
  .che{
    width: 16px;
    height: 16px;
    margin-top: 8px;
    margin-right: 60px;

  }
  .mycart{
    font-size: 12px;
    color: #C81623;
    cursor: pointer;
    margin-left: -40px ;

  }

  .ci-count{
    position: absolute;
    top: 1px;
    width: 14px;
    height: 14px;
    left: 30px;
    right: auto;
    display: inline-block;
    padding: 1px 4px;
    font-size: 12px;
    color: #fff;
    background-color: #C81623;
    border-radius: 7px;
    min-width: 12px;
    text-align: center;
    line-height: 15px;
  }
  em,i{
    font-style: normal;
  }


</style>
