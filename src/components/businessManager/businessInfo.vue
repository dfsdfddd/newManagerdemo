<template>
  <div class="pageWraper parent-relative">
    <el-card shadow="hover" class="pageSearch">
      <el-form  :label-position="'top'" label-width="80px" :model="form">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="登录号">
              <el-input v-model="form.loginName" placeholder="请输入内容"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="商户号">
              <el-input v-model="form.merchantNum" placeholder="请输入内容"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="商户名称">
              <el-input v-model="form.merchantName" placeholder="请输入内容"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="所属机构">
              <el-input v-model="form.mechanism" placeholder="请输入内容"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="商户状态">
              <el-select v-model="form.businessState" clearable size="medium">
                <el-option v-for="item in option" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label="创建时间">
              <template>
                <el-date-picker @blur="starDateFun()" v-model="startDate" type="date" size="medium" :picker-options="pickerOptionsStar" placeholder="选择开始日期">
                </el-date-picker>
                <el-date-picker v-model="endDate" type="date" size="medium" placeholder="选择结束日期" :picker-options="pickerOptions">
                </el-date-picker>
              </template>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="" style="margin-top:29px;">
              <el-button type="primary" size="medium">查询</el-button>
              <el-button type="info" class="color81c79f">新增</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card shadow="hover" class="pageList">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="登录号" width="">
        </el-table-column>
        <el-table-column prop="name" label="商户号/名称" width="">
        </el-table-column>
        <el-table-column prop="province" label="用户类型" width="">
        </el-table-column>
        <el-table-column prop="city" label="所属机构" width="">
        </el-table-column>
        <el-table-column prop="address" label="状态" width="">
        </el-table-column>
        <el-table-column prop="zip" label="创建时间" width="">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="136">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="primary" size="mini" class="miniBtn">详情</el-button>
            <el-button type="info" size="mini" class="color81c79f miniBtn">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination class="pageListPag" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
      </el-pagination>
    </el-card>
    <transition name="cover" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'businessInfo',
  mounted() {},
  data() {
    return {
      form: {
        loginName: '',
        merchantNum: '',
        merchantName: '',
        mechanism: '',
        businessState: ''
      },
      startDate: new Date(),
      endDate: new Date(),
      currentPage4: 4,
      option: [],
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }
      ],
      pickerOptionsStar: {
        disabledDate: time => {
          var newdate = new Date()
          return time.getTime() > newdate.getTime() // 不可选当前日期以后
        }
      },
      pickerOptions: {
        disabledDate: time => {
          var newdate = new Date()
          var date = new Date(this.startDate)
          var starDateStr = this.moment(date).format('YYYYMM') // 获取开始时间月份
          var nweDateStr = this.moment(newdate).format('YYYYMM') // 当前时间月份
          // var endDate = new Date(this.endDate)
          if (nweDateStr === starDateStr) {
            return (
              time.getTime() > newdate.getTime() ||
              time.getTime() < date.getTime()
            ) // 当月可选择时间为起始时间到当天
          }
          var currentMonth = date.getMonth()
          var nextMonth = ++currentMonth
          var nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1)
          var oneDay = 1000 * 60 * 60 * 24
          var date2 = new Date(nextMonthFirstDay - oneDay)
          return (
            time.getTime() > date2.getTime() || time.getTime() < date.getTime()
          ) // 非当月可选时间为月初到月末
        }
      }
    }
  },
  methods: {
    starDateFun() {
      if (
        this.startDate > this.endDate ||
        this.moment(this.startDate).format('YYYYMM') !==
          this.moment(this.endDate).format('YYYYMM')
      ) {
        this.endDate = null
      }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.pageWraper .el-form-item__label {
  line-height: none;
}
</style>
