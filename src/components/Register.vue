<template>
  <div>
    <div class="login_background">
      <img :src="imgSrc" width="100%" height="100%" alt="" />
    </div>
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/logo2.png" alt="" />
      </div>
      <!-- 注册表单区域 -->
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginFormRules"
        label-width="80px"
        class="login_form"
      >
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="患者注册" name="first">
            <!-- 用户名 -->
            <el-form-item prop="username" label="用户名">
              <el-input
                v-model="loginForm.username"
                prefix-icon="el-icon-user"
              ></el-input>
            </el-form-item>
            <!-- 密码 -->
            <el-form-item prop="password" label="密码">
              <el-input
                v-model="loginForm.password"
                prefix-icon="el-icon-lock"
                type="password"
              ></el-input>
            </el-form-item>
            <!-- 确认密码 -->
            <el-form-item prop="rePassword" label="确认密码">
              <el-input
                v-model="loginForm.rePassword"
                prefix-icon="el-icon-lock"
                type="password"
              ></el-input>
            </el-form-item>
            <!-- 按钮区域 -->
            <el-form-item class="btns">
              <el-button type="text" @click="toLogin">已有账号，登陆</el-button>
              <el-button type="primary" @click="register">注册</el-button>
              <el-button type="info" @click="resetloginForm">重置</el-button>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="医生注册" name="second">
            <!-- 用户名 -->
            <el-form-item prop="username" label="用户名">
              <el-input
                v-model="loginForm.username"
                prefix-icon="el-icon-user"
              ></el-input>
            </el-form-item>
            <!-- 密码 -->
            <el-form-item prop="password" label="密码">
              <el-input
                v-model="loginForm.password"
                prefix-icon="el-icon-lock"
                type="password"
              ></el-input>
            </el-form-item>
            <!-- 医院 -->
            <el-form-item prop="hospital" label="工作医院">
              <el-input
                v-model="loginForm.hospital"
                prefix-icon="el-icon-office-building"
              ></el-input>
            </el-form-item>
            <!-- 确认密码 -->
            <el-form-item prop="rePassword" label="确认密码">
              <el-input
                v-model="loginForm.rePassword"
                prefix-icon="el-icon-lock"
                type="password"
              ></el-input>
            </el-form-item>
            <!-- 按钮区域 -->
            <el-form-item class="btns">
              <el-button type="text" @click="toLogin">已有账号，登陆</el-button>
              <el-button type="primary" @click="register">注册</el-button>
              <el-button type="info" @click="resetloginForm">重置</el-button>
            </el-form-item>
          </el-tab-pane>
        </el-tabs>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    //在data里面定义两个校验器,检验输入框是否为空以及两次密码是否一致
    var validatePass = (rule, value, callback) => {
    if (value !== this.loginForm.password) {
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
        hospital: "",
      },
      //这是表单的验证规则对象
      loginFormRules: {
        //验证用户名是否合法
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        //验证工作医院是否合法
        hospital:[
          { required: true, message: "请输入工作医院", trigger: "blur"},
          {
            min: 4,
            message: "工作医院不能为空",
            trigger: "blur",
          },
        ],
        //验证密码是否合法
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
        //确认密码是否正确
        rePassword: [
          { required: true, message: "请再次确认密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
          { validator: validatePass, trigger: "blur" },
        ],
      },
      passwordType: "password",
      capsTooltip: false,
      loading: false,
      redirect: undefined,
      activeName: "first",
      imgSrc: require("../assets/bg.png"),
    };
  },
  methods: {
    //跳转到登录界面
    toLogin() {
      this.$router.push("/login");
    },
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
            url: "/api/v1/sign", //改地址
            headers: {
              "Content-Type": "application/json;charset=UTF-8", //这是以json字符串的形式发送到后端，要改
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
.login_background {
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
}

.login_box {
  width: 450px;
  height: 400px;
  background-color: #ffffff;
  opacity: 0.9;
  border-radius: 5px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-110%, -40%);
  z-index: 1;
  border: 1px solid #d8d2d2;
}

.avatar_box {
  height: 130px;
  width: 130px;
  border: 1px solid #d8d2d2;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -70%);
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
  bottom:10px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: flex-end;
}
</style>