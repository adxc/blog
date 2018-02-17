<template>
  <div class="m-bd">
    <div class="m-article">
      <ul class="m-art-list">
        <li class="m-art-item" v-for="article in articlesList" :key = "article.id">
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
</template>
<script>
import utils from '../utils'
export default {
  name: 'essay',
  data:function(){
      return {
        articlesList:[]
      }
    },
    created:function(){
      this.getArticlesList();
    },
    methods:{
      getArticlesList:function(){
        let jsonParams = {
          url:"/api/front/api/articleType/essay",
          params:{}
        }
        utils.sendAjax(jsonParams,(data)=>{
          console.log(data)
          this.articlesList = data.data
        })
      }
    }
}
</script>
<style lang="scss" scoped>
  .m-article {
       width: 100%;
    .m-art-list {
         padding-left: 20px;
         li{
             list-style-type: square ;
         }
      .m-art-detail {
        flex: 1 1 auto;
      }
    }
  }
</style>
