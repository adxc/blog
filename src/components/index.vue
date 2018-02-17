<template>
  <div class="m-bd">
    <div class="g-mn">
      <div class="m-banner">
        <img src="../assets/banner.png" alt="">
      </div>
      <div class="m-art">
        <ul class="m-art-list">
          <li class="m-art-item" v-for="article in articles" :key = "article.id">  
            <div class="m-art-info">
             {{article.time}}
            </div>
            <div class="m-art-detail">
                <router-link :to="{name:'article',params:{id:article.id}}">
                <dl>
                  <dt>{{article.title}}</dt>
                  <dd>
                    <label for="">分类:</label> {{article.type}}
                    <label for="">标签:</label> {{article.tag}}
                  </dd>
                  <dd v-html="article.content" class="note">{{article.content}}</dd>
                </dl>
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="g-sd">
      <div class="g-sdc">
        <div class="m-title ">
          <i class="icon-ziliao1 iconfont"></i>
          <span>我的名片</span>
        </div>
        <div class="m-intro">
          <ul>
            <li>网名：handsomeboy | 美男子</li>
            <li>职业：Web前端工程师、Python程序员</li>
            <li>QQ：181551588</li>
            <li>Email：andyxic@163.com</li>
          </ul>
          <img src="../assets/monkey.png" alt="" class="m-logo">
        </div>
      </div>
      <div class="g-sdc">
        <div class="m-title">
          <i class="iconfont icon-information"></i>
          <span>推荐博文</span>
        </div>
        <div class="m-list">
          <ul>
            <li v-for="item in recommend" :key = "item.id">
              <router-link :to="{name:'article',params:{id:item.id}}">{{item.title}}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="g-sdc">
        <div class="m-title">
          <i class="iconfont icon-python1"></i>
          <span>Python</span>
           <router-link to="/python">更多</router-link>
        </div>
        <div class="m-list">
          <ul>
            <li v-for=" item in recommendPython" :key = "item.id">
              <router-link :to="{name:'article',params:{id:item.id}}">{{item.title}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import utils from '../utils'
  export default {
    name: "Home",
    data:function (){
      return {
        articles:[],
        recommend:[],
        recommendPython:[],
      }
    },
    created:function(){
      this.getArticlesList()
      this.getRecommend()
      this.getRecommendPython()
    },
    methods:{
      getArticlesList:function(){
        let jsonParams = {
          url:"/api/front/api/all",
          params:{
            pageNum:1,
            pageSize:5,
          }
        }
       utils.sendAjax(jsonParams,(data)=>{
         this.articles = data.data
       })
      },
      getRecommend:function(){
        let jsonParams = {
          url:'/api/front/api/all',
          params:{
            pageNum:1,
            pageSize:6,
          }
        }
        utils.sendAjax(jsonParams,(data) =>{
          this.recommend = data.data
        })
      },
      getRecommendPython:function(){
        let jsonParams = {
          url:'/api/front/api/articleType/python',
          params:{
            pageNum:1,
            pageSize:5,
          }
        }
        utils.sendAjax(jsonParams,(data)=>{
          this.recommendPython = data.data
        })
      }
    }
  }

</script>
<style lang="scss" scoped>


</style>
