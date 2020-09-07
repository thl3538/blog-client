<template>
    <div class="register">
        <section class="form-container">
            <div class="title">博客登录</div>
            <el-form :model="loginForm" :rules="rule" ref="loginForm" label-width="100px" class="loginForm">
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="loginForm.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="loginBlog('loginForm')" class="btn">登录</el-button>
                </el-form-item>
            </el-form>
            <div class="tiparea">
                <p>还没有账号？现在<router-link to='register'>注册</router-link>
                </p>
            </div>
        </section>
    </div>
</template>

<script>
    import jwt_decode from 'jwt-decode';
    export default {
        name: "login",
        data() {
            return {
                loginForm: {
                    name: "",
                    password: "",
                },

                rule: {
                    name: [{
                            required: true,
                            message: '请输入用户名',
                            trigger: 'blur'
                        },
                        {
                            max: 10,
                            min: 3,
                            message: "长度在3-10之间",
                            trigger: "blur"
                        }
                    ],
                    password: [{
                            required: true,
                            message: '请输入密码',
                            trigger: 'blur'
                        },
                        {
                            max: 16,
                            min: 6,
                            message: "长度在6-16之间",
                            trigger: "blur"
                        }
                    ]
                }
            }
        },
        methods: {
            loginBlog(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$axios.post("/api/users/login", this.loginForm)
                            .then(res => {
                                // console.log(res.data);
                                const {
                                    token
                                } = res.data;
                                localStorage.setItem('blog_token', token);

                                //解析token
                                const decode = jwt_decode(token);
                                // console.log(decode);

                                //token存储到vuex中
                                this.$store.dispatch("setAuthorization", !this.isEmpty(decode));

                                this.$store.dispatch("setUser", decode);

                                this.$router.push("/index")
                            })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            isEmpty(value) {
                return (
                    value === undefined ||
                    value === null ||
                    (typeof value === "object" && Object.keys(value).length === 0) ||
                    (typeof value === "string" && value.trim().length === 0)
                )
            }
        },
    }
</script>

<style scoped>
    .register {
        position: relative;
        width: 100%;
        height: 100%;
        overflow-y: hidden;
        overflow-x: hidden;
        background: url(../assets/curry.jpg);
        background-size: 100% 100%;
    }

    .form-container {
        position: absolute;
        width: 370px;
        padding: 24px;
        border-radius: 5px;
        top: 10%;
        left: 34%;
        box-shadow: 0px 5px 10px #cccc;
        background-color: #fff;
    }

    .form-container .title {
        text-align: center;
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 10px;
    }

    .form-container .btn {
        width: 100%;
    }

    .form-container .tiparea {
        float: right;
    }
</style>