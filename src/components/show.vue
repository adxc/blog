<template>
  <div class="g-sdc">
    <div class="m-title ">
      <i class="iconfont" :class="showType"></i>
      <span>{{showName}}</span>
      <slot></slot>
    </div>
     <div class="m-list" v-if="isArticle">
          <ul>
            <li v-for="item in articles" :key = "item.id">
              <router-link :to="{name:'article',params:{id:item.id}}">{{item.title}}</router-link>
            </li>
          </ul>
        </div>
    <div class="m-intro" v-else>
      <ul>
        <li>网名：handsomeboy | 美男子</li>
        <li>职业：Web前端工程师、Python程序员</li>
        <li>QQ：181551588</li>
        <li>Email：andyxic@163.com</li>
      </ul>
      <img src="../assets/monkey.png" alt="" class="m-logo">
    </div>

  </div>
</template>
<script>
export default {
   props: ['showName','showType','isArticle','articles'],
   
}
</script>
<style lang="sass">

</style