<template>
    <div class="register">
        <section class="form-container">
            <div class="title">博客注册</div>
            <el-form :model="registerForm" :rules="rule" ref="registerForm" label-width="100px" class="registerForm">
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="registerForm.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="registerForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="password2">
                    <el-input type="password" v-model="registerForm.password2" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="btn" @click="submitForm('registerForm')">注册</el-button>
                </el-form-item>
            </el-form>
        </section>
    </div>
</template>

<script>
    export default {
        name: "register",
        data() {
            var validatePass2 = (rule, value, callback) => {
                if (value !== this.registerForm.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                name: 'register',
                registerForm: {
                    name: "",
                    email: "",
                    password: "",
                    password2: ""
                },

                rule: {
                    name: [{
                            required: true,
                            message: '请输入用户名',
                            trigger: 'blur'
                        },
                        {
                            max: 10,
                            min: 2,
                            message: "用户名长度在2-10之间",
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
                    ],
                    password2: [{
                            required: true,
                            message: '请输入确认密码',
                            trigger: 'blur'
                        },
                        {
                            validator: validatePass2,
                            trigger: 'blur'
                        }
                    ]
                }
                
            }
        },
        methods: {
                    submitForm(formName) {
                        this.$refs[formName].validate((valid) => {
                            if (valid) {
                              this.$axios
                                .post('/api/users/register',this.registerForm)
                                    .then((res) => {
                                        this.$message({
                                            message: "注册成功",
                                            type: "success",
                                            center: true 
                                        })
                                        this.$router.push("/login");
                                    })  
                            } else {
                                console.log('error submit!!');
                                return false;
                            }
                        });
                    },
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
</style>