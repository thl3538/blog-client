<template>
    <div class="headerNav">
        <el-row>
            <el-col :span="6" class="logo-container">
                <img src="../assets/logo.png" class="logo" alt="">
                <span class="title">everyone blog</span>
            </el-col>
            <el-col :span="6" class="user">
                <div class="userinfo">
                    <el-avatar class="avatar" icon="el-icon-user-solid"></el-avatar>
                    <div class="welcome">
                        <p class="name comename">欢迎</p>
                        <p class="name avatarname">{{user.name}}</p>
                    </div>
                    <span class="username">
                        <el-dropdown @command="setDialogInfo">
                            <span class="el-dropdown-link">
                              <i class="el-icon-caret-bottom el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                              <el-dropdown-item command="info">个人信息</el-dropdown-item>
                              <el-dropdown-item command="logout">退出</el-dropdown-item>
                            </el-dropdown-menu>
                          </el-dropdown>
                    </span>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default{
        name: "headerNav",
        computed: {
            user(){
                return this.$store.getters.user;
            }
        },
        methods: {
            setDialogInfo(cmdItem){
            switch(cmdItem){
                case 'info':
                    this.showInfo();
                    break;
                case 'logout':
                    this.logout();
                    break;
            }
        },
        showInfo(){
            //console.log("个人信息");
            this.$router.push('/infoshow')
        },
        logout(){
            // console.log("退出")
            //清除token
            localStorage.removeItem('blog_token');

            this.$store.dispatch("clearCurrentState");

            this.$router.push('/login');
            
        }
        },
    }
</script>

<style scoped>
.headerNav{
    width: 100%;
    height: 60px;
    display: fixed;
    top: 0;
    min-width: 600px;
    padding: 5px;
    background: #324057;
    color: #fff;
    border-bottom: 1px solid #1f2d3d;
}
.headerNav .logo_container{
    line-height: 60px;
    min-width: 400px;
}
.logo {
  height: 50px;
  width: 50px;
  margin-right: 5px;
  vertical-align: middle;
  display: inline-block;
}
.title {
  vertical-align: middle;   
  font-size: 22px;
  font-family: "Microsoft YaHei";
  letter-spacing: 3px;
}
.user {
  line-height: 60px;
  text-align: right;
  float: right;
  padding-right: 10px;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  vertical-align: middle;
  display: inline-block;
}
.welcome {
  display: inline-block;
  width: auto;
  vertical-align: middle;
  padding: 0 5px;
}
.name {
  line-height: 20px;
  text-align: center;
  font-size: 14px;
}
.comename {
  font-size: 12px;
}
.avatarname {
  color: #409eff;
  font-weight: bolder;
}
.username {
  cursor: pointer;
  margin-right: 5px;
}
.el-dropdown {
  color: #fff;
}
</style>