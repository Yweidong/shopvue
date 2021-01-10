<template>
    <div>
      <el-form
        v-loading="loading"
        element-loading-text="正在加载中。。。"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        ref="registerForm" :rules="rules" :model="registerForm" class="registerContainer">
        <h3 class="registTitle">系统注册</h3>
        <el-form-item label="用户名" prop="username">

          <el-input type="text" auto-complete="false" v-model="registerForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" auto-complete="false" v-model="registerForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="registerForm.checkPass" autocomplete="off" placeholder="请确认密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%" @click="submitRegist()">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data() {
          var vaildateUserName = (rule,value,callback) => {
            if (value == '') {
              callback(new Error("请输入用户名"));
            } else if (this.registerForm.username.length < 5) {
              callback(new Error("长度至少5个字符"))
            }
          };
          var validatePass = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入密码'));
            } else {
              if (this.registerForm.checkPass !== '') {
                this.$refs.registerForm.validateField('checkPass');
              }
              callback();
            }
          };
          var validatePass2 = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请再次输入密码'));
            } else if (value !== this.registerForm.password) {
              callback(new Error('两次输入密码不一致!'));
            } else {
              callback();
            }
          };

          return {
            registerForm: {
              username: '',
              password: '',
              checkPass: '',
            },
            loading: false,
            rules: {
              username: [
                {validator: vaildateUserName,trigger: 'blur'}
              ],
              pass: [
                {validator: validatePass,trigger: 'blur'}
              ],
              checkPass: [
                {validator: validatePass2,trigger: 'blur'}
              ]
            }
          }
        }
    }
</script>

<style>
.registerContainer{
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 360px;
  padding: 15px 35px 15px 35px;
  background: white;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
</style>
