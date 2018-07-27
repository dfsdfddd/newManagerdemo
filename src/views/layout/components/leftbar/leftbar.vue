<template>
  <div class="left">
    <!-- <router-link :to="{name:'overview'}" active-class="u-link--Active">
      <div class="left-title">
        <div class="title">
          首页
          <i class=""></i>
        </div>
      </div>
    </router-link>  -->
    <div class="left-menu">
      <!-- @open="handleOpen" @close="handleClose" -->
      <el-menu :default-active="$route.path" class="el-menu-vertical-demo" router>
        <leftbaritem :routes='items'></leftbaritem>
      </el-menu>
    </div>
  </div>
</template>

<script>
import leftbaritem from './leftbaritem'
export default {
  name: 'leftbar',
  data() {
    return {
      menus: [],
      items: [
        {
          icon: 'el-icon-2trans',
          index: '1',
          title: '商户管理',
          childs: [
            {
              icon: '',
              index: '/businessInfo',
              title: '商户信息'
            },
            {
              icon: '',
              index: '/businessAudits',
              title: '商户审核'
            }
          ]
        },
        {
          icon: 'el-icon-3list',
          index: '5',
          title: '应用管理',
          childs: [
            {
              index: '/applicationList',
              title: '应用列表'
            }
          ]
        },
        {
          icon: 'el-icon-4user',
          index: '6',
          title: '交易管理',
          childs: [
            {
              index: '/orderInfo',
              title: '订单信息'
            }
          ]
        },
        {
          icon: 'el-icon-5good',
          index: '7',
          title: '用户管理',
          childs: [
            {
              index: '/userInfo',
              title: '用户信息'
            },
            {
              index: '/bindingCardInfo',
              title: '绑卡信息'
            }
          ]
        },
        {
          icon: 'el-icon-5good',
          index: '8',
          title: '账户托管',
          childs: [
            {
              index: '/subMerchantInNet',
              title: '子商户入网'
            },
            {
              index: '/personalWalletInfo',
              title: '个人钱包信息'
            },
            {
              index: '/supportList',
              title: '支持列表'
            }
          ]
        },
        {
          icon: 'el-icon-5good',
          index: '9',
          title: '系统管理',
          childs: [
            {
              index: '/operators',
              title: '操作员管理'
            },
            {
              index: '/roleMaintenance',
              title: '角色维护'
            }
          ]
        }
      ]
    }
  },
  mounted() {},
  methods: {},
  computed: {},
  components: {
    leftbaritem
  }
}
</script>

<style lang="scss" type="text/scss" scoped>
.left-menu {
  .el-menu {
    padding-right: 12px;
  }
}
</style>
