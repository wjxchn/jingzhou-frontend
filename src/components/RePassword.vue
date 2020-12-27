<template>
    <div>
        <span>
            <el-form label-width="120px" ref="forgetpwdform" :model="forgetpwdform" :rules="rules">
                <el-form-item prop="oldpassword" label="旧密码">
                    <el-input type="password" v-model="forgetpwdform.oldpassword"></el-input>
                </el-form-item>
                <el-form-item prop="newpassword" label="新密码">
                    <el-input type="password" v-model="forgetpwdform.newpassword"></el-input>
                </el-form-item>
                <el-form-item prop="repeatpassword" label="确认密码">
                    <el-input type="password" v-model="forgetpwdform.repeatpassword"></el-input>
                </el-form-item>
            </el-form>
          </span>
          <span slot="footer" class="dialog-footer">
            <el-button type="default" @click="handleClean('forgetpwdform')">重置</el-button>
            <el-button type="primary" @click="handleSubmit('forgetpwdform')">确定</el-button>
          </span>
    </div>
</template>

<script>
    export default {
        name: "RePassword",
        data() {
            return {
                forgetpwdform: {
                    oldpassword: "",
                    newpassword: "",
                    repeatpassword: ""
                },
                rules: {
                    oldpassword: [
                        {
                            required: true, message: "旧密码不能为空", trigger: "blur"
                        },
                    ],
                    newpassword: [
                        {
                            required: true, message: "新密码不能为空", trigger: "blur"
                        },
                    ],
                    repeatpassword: [
                        {
                            required: true, message: "重置密码不能为空", trigger: "blur"
                        }
                    ]
                }
            };
        },
        methods:{
            handleSubmit(formName){
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        this.$axios({
                            method:"post",
                            url:'/api/user/changeuserinfo/password',
                            data:{'password1':this.forgetpwdform.oldpassword,'password2':this.forgetpwdform.newpassword,'password3':this.forgetpwdform.repeatpassword,'username':localStorage.getItem("username")}
                        }).then((res) => {
                            console.log(res)
                            if(res.data.data.code==200){
                                alert('修改密码成功')
                            }
                            else{
                                alert('修改密码失败')
                            }
                        }).catch((failResponse) => {
                            alert('修改密码失败')
                        });
                    } else{
                        alert("登陆失败");
                        return false;
                    }
                });
            },
            handleClean(formName){
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>

</style>
