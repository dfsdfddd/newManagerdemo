<template>
  <div>
    <template v-for="item in routes">
      <template v-if="item.childs">
        <el-submenu :index="item.index" :key="item.index">
          <template slot="title">
            <i :class="item.icon"></i>{{ item.title }}</template>
          <template v-for="child in item.childs">
            <leftbaritem :is-next='true' class="nextmenu" v-if="child.childs&&child.childs.length>0" :routes="[child]" :key="child.index"></leftbaritem>
            <template v-else>
              <el-menu-item :index="child.index" :key="child.index">
                <i :class="child.icon"></i>{{ child.title }}
              </el-menu-item>
            </template>
          </template>
          <!-- <el-menu-item v-for="(subItem,i) in item.childs" :key="i" :index="subItem.index">{{ subItem.title }}
              </el-menu-item> -->
        </el-submenu>
      </template>
      <template v-else>
        <el-menu-item :index="item.index" class="downClass" :key="item.index">
          <i :class="item.icon"></i>{{ item.title }}
        </el-menu-item>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: 'leftbaritem',
  props: {
    routes: {
      type: Array
    },
    isNext: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
