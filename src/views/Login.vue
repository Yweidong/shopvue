<template>
    <div>
      <el-form
        v-loading="loading"
        element-loading-text="正在登录中。。。"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        ref="loginForm" :rules="rules" :model="loginForm" class="loginContainer">
        <h3 class="loginTitle">系统登录</h3>
        <el-form-item prop="username">

          <el-input type="text" auto-complete="false" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" auto-complete="false" v-model="loginForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%" @click="submitLogin()">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>


    export default {
        name: "Login",
        methods: {
          submitLogin() {
            this.$refs.loginForm.validate((valid) => {
              if (valid) {
                this.loading = true
               this.request({
                 url: '/login',
                 method: 'post',
                 data: {
                   username: this.username,
                   password: this.password
                 }
               }).then(rep => {
                 if (rep) {
                   this.loading = false
                   //存储token
                   const tokenStr = res.data.token
                   window.sessionStorage.setItem('token',tokenStr)
                   this.router.push("/Home")
                 }

               })
              } else {
                this.$message.error("请输入缺省字段")
                return false;
              }
            });
          }
        },
        data() {
          return{
            loginForm: {
              username: '',
              password: ''
            },
            loading: false,
            rules: {
              username: [
                {required: true,message: '请输入用户名',trigger: 'blur'},
                {min: 5,message: '长度至少5个字符',  trigger: 'blur'}
              ],
              password: [
                {required: true,message:'请输入密码',trigger: 'blur'}
              ]
            }

          }
        }
    }
</script>

<style>
  .loginContainer{
    border-radius: 15px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 15px 35px 15px 35px;
    background: white;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .loginTitle{
    margin: 0px auto 40px auto;
    text-align: center;
  }
</style>
