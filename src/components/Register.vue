<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <!-- 注册表单区域 -->
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginFormRules"
        label-width="0px"
        class="login_form"
      >
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="患者注册" name="first"></el-tab-pane>
          <el-tab-pane label="医生注册" name="second"></el-tab-pane>
        </el-tabs>
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="el-icon-lock"
            type="password"
          ></el-input>
        </el-form-item>
        <!-- 确认密码 -->
        <el-form-item prop="rePassword">
          <el-input
            v-model="loginForm.rePassword"
            prefix-icon="el-icon-lock"
            type="password"
          ></el-input>
        </el-form-item>

        <!--用路由跳转到登陆组件-->
        <router-link to="/Login">已有账号，登陆</router-link>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <!-- <router-link to="/Login">已有账号，登陆</router-link> -->
          <el-button type="primary" @click="register">注册</el-button>
          <el-button type="info" @click="resetloginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    //在data里面定义两个校验器,检验输入框是否为空以及两次密码是否一致
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.loginForm.repassword !== "") {
          this.$refs.loginForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.loginForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      //这是注册表单的数据绑定对象
      loginForm: {
        username: "",
        password: "",
        rePassword: "",
      },
      //这是表单的验证规则对象
      loginFormRules: {
        //验证用户名是否合法
        username: [
          { required: true, message: "请输入用户名称", trigger: "change" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        //验证密码是否合法
        password: [
          { required: true, message: "请输入登录密码", trigger: "change" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
          { validator: validatePass, trigger: "blur" },
        ],
        //确认密码是否正确
        rePassword: [
          { required: true, message: "请再次确认密码", trigger: "change" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
          { validator: validatePass2, trigger: "blur" },
        ],
      },
      passwordType: "password",
      capsTooltip: false,
      loading: false,
      redirect: undefined,
      activeName: "first",
    };
  },
  methods: {
    //点击重置按钮，重置登录
    resetloginForm() {
      //console.log(this)
      this.$refs.loginFormRef.resetFields();
    },
    //注册功能
    register() {
      this.$refs.loginForm.validate((valid) => {
        // 获取loginform的实例（el-form），找到validate方法，根据验证规则rules校验是否valid
        if (valid) {
          this.loading = true;
          this.$axios({
            method: "post",
            url: "/api/v1/sign",   //改地址
            headers: {
              "Content-Type": "application/json;charset=UTF-8",   //这是以json字符串的形式发送到后端，要改
            },
            data: {
              name: this.loginForm.username,
              password: this.loginForm.password,
            },
          })
            .then((res) => {
              //请求成功后执行函数
              if (res.data.message === "SUCCESS") {
                this.$router.push("/login"); //登录验证成功路由实现跳转
                this.$message({
                  showClose: true,
                  message: "注册成功",
                  type: "success",
                });
              } else {
                this.$notify({
                  title: "提示",
                  message: "用户登录失败",
                  duration: 3000,
                });
              }
            })
            .catch(() => {
              his.$notify({
                title: "提示",
                message: "用户访问错误",
                duration: 3000,
              });
              console.log(err);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>



<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}

.login_box {
  width: 450px;
  height: 400px;
  background-color: #ffffff;
  border-radius: 5px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -40%);
}

.avatar_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eeeeee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -65%);
  background-color: #fff;
  img {
    width: 100%;
    width: 100%;
    border-radius: 50%;
    background-color: #eeeeee;
  }
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: flex-end;
}
</style>