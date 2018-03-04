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
             {{article.time | timeFormatter}}
            </div>
            <div class="m-art-detail">
                <router-link :to="{name:'article',params:{id:article.id}}">
                <dl>
                  <dt>{{article.title}}</dt>
                  <dd>
                    <label for="">分类:</label> {{article.type}}
                    <label for="">标签:</label> {{article.tag}}
                  </dd>
                  <dd v-html="artFormatter(article.content)" class="note"></dd>
                </dl>
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="g-sd">
    <show-me :show-name="'我的名片'" :show-type="infoLogo" :is-article="!isArticle" :articles="recommend"></show-me>
     <show-me :show-name="'推荐博文'" :show-type="artLogo" :is-article="isArticle" :articles="recommend"></show-me>
      <show-me :show-name="'Python'" :show-type="pythonLogo" :is-article="isArticle" :articles="recommendPython">
         <router-link to="/python">更多</router-link>
      </show-me>
    </div>
  </div>
</template>
<script>
import showInfo from "./show"
import utils from '../utils'
  export default {
    name: "Home",
    data:function (){
      return {
        articles:[],
        recommend:[],
        recommendPython:[],
        infoLogo:"icon-ziliao1",
        pythonLogo:"icon-python1",
        artLogo: "icon-information",
        isArticle:true,
      }
    },
    components:{
    'show-me': showInfo,
    },
    mounted(){
        this.getArticlesList()
        this.getRecommend()
        this.getRecommendPython()
    },
    computed:{
    },
    methods:{
      showMe(){
        this.show = !this.sho
      },
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
