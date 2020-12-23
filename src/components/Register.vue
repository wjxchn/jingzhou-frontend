<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="用户名" prop="name"><el-input v-model="ruleForm.name"></el-input></el-form-item>
    <el-form-item label="邮箱" prop="email"><el-input v-model="ruleForm.email"></el-input></el-form-item>
    <el-form-item label="密码" prop="pass"><el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input></el-form-item>
    <el-form-item label="确认密码" prop="checkPass"><el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input></el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };

    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };

    // var validateEmail = (rule, value, callback) => {
    //   if (value === '') {
    //     callback(new Error('请输入邮箱'));
    //   } else if (value.indexOf('@') === -1) {
    //     callback(new Error('错误邮箱格式'));
    //   } else if (value.indexOf('.com') === -1) {
    //     callback(new Error('错误邮箱格式'));
    //   } else {
    //     callback();
    //   }
    // }

    return {
      activeName: 'second',
      ruleForm: {
        name: '',
        email: '',
        pass: '',
        checkPass: ''
      },
      rules: {
        name: [{ required: true, message: '请输入您的名称', trigger: 'blur' }, { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }],
        email: [{ required: true,message:'请输入邮箱地址' ,trigger: 'blur'},
        {type:'email', message:'请输入正确的邮箱地址', trigger:['blur','change']}],
        pass: [{ required: true, validator: validatePass, trigger: 'blur' }],
        checkPass: [{ required: true, validator: validatePass2, trigger: 'blur' }]
      }
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios({
            method:"post",
            url:'http://106.14.12.11:8443/user/register/',
            data:{'username':this.ruleForm.name,'password':this.ruleForm.pass,'email':this.ruleForm.email}
          }).then(
            response=>{
              console.log(response);
              if(response.data.code === 200)
              {
                this.$message({
                  type: 'success',
                  message: '注册成功'
                });
                alert(response.data.msg);
                this.$router.push('/login')
              }
              else if(response.data.code === 400)
              {
                this.$message({
                  type:'fail',
                  message:'用户名已存在'
                });
                alert(response.data.msg);
              }
            }
          ).catch(error=>{
            console.log(error);
            return false;
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
