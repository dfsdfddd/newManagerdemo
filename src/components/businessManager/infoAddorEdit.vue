<template>
  <div class="full_router">
    <div class="pageIn">
      <el-card shadow="hover" class="addOrEdit">
        <el-form :label-position="'right'" label-width="140px" :model="form">
          <el-row :gutter="10">
            <el-col :span="24">
              <el-form-item label="用户信息" class="blue">
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="0">
            <el-col :span="8">
              <el-form-item label="登录号">
                <el-input v-model="form.region" size="medium"></el-input>
              </el-form-item>

            </el-col>
            <el-col :span="8">
              <el-form-item label="所属机构">
                <el-input v-model="form.type" size="medium"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="0">
            <el-col :span="8">
              <el-form-item label="企业邮箱">
                <el-input v-model="form.region" size="medium"></el-input>
              </el-form-item>

            </el-col>
            <el-col :span="8">
              <el-form-item label="联系人手机号">
                <el-input v-model="form.type" size="medium"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="0">
            <el-col :span="24">
              <el-form-item label="企业信息" class="blue">
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="0">
            <el-col :span="8">
              <el-form-item label="企业名称">
                <el-input v-model="form.region" size="medium"></el-input>
              </el-form-item>

            </el-col>
            <el-col :span="8">
              <el-form-item label="企业简称">
                <el-input v-model="form.type" size="medium"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="0">
            <el-col :span="8">
              <el-form-item label="企业注册地">
                <el-input v-model="form.region" size="medium"></el-input>
              </el-form-item>

            </el-col>
            <el-col :span="8">
              <el-form-item label="企业地址">
                <el-input v-model="form.type" size="medium"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="0">
            <el-col :span="8">
              <el-form-item label="统一社会信用代码">
                <el-input v-model="form.region" size="medium"></el-input>
              </el-form-item>

            </el-col>
            <el-col :span="8">
              <el-form-item label="营业期限">
                <el-input v-model="form.type" size="medium"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="0">
            <el-col :span="8">
              <el-form-item label="统一信用代码扫描件">
                <el-input v-model="form.region" size="medium"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="0">
            <el-col :span="24">
              <el-form-item label="法人信息" class="blue">
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="0">
            <el-col :span="8">
              <el-form-item label="法人名称">
                <el-input v-model="form.region" size="medium"></el-input>
              </el-form-item>

            </el-col>
            <el-col :span="8">
              <el-form-item label="法人手机号">
                <el-input v-model="form.type" size="medium"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="0">
            <el-col :span="8">
              <el-form-item label="法人身份证号">
                <el-input v-model="form.region" size="medium"></el-input>
              </el-form-item>

            </el-col>
            <el-col :span="8">
              <el-form-item label="证件有效期">
                <el-input v-model="form.type" size="medium"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="0">
            <el-col :span="24">
              <el-form-item label="身份证正面" class="blue">
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="身份证反面">
                <el-input v-model="form.region" size="medium"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="0">
            <el-col :span="24">
              <el-form-item label="" class="blue">
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="padding-left:140px;">
            <el-col :span="3">
              <el-button type="primary">提交</el-button>
            </el-col>
            <el-col :span="3">
              <el-button type="info">返回</el-button>
            </el-col>
          </el-row>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'infoAddorEdit',
  data() {
    return {
      form: {
        name: '',
        region: '',
        type: ''
      }
    }
  }
}
</script>

<style scoped>
</style>
