<template>
  <div class="m-bd">
    <div class="m-article">
      <div class="m-art-info">
        <div class="m-art-time">{{article.time}}</div>
        <div class="m-art-uv">0阅读</div>
      </div>
      <div class="m-art-cnt">
        <div class="m-art-title">
          {{article.title}}
        </div>
        <div class="m-art-tag">
          分类：{{article.type}} 标签：{{article.tag}}
        </div>
        <div class="u-art-ctn" v-html="article.content">
         {{article.content}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import utils from '../utils'
export default { 
  name: 'article', 
  data:function(){
    return {
      article:{}
    }
  },
  created:function(){
    let id = this.$route.params.id
    this.getArticle(id)
  },
  methods:{
    getArticle:function(id){
      let jsonParams = {
        url:'/api/front/api/articleDetails/'+id,
        params:{}
      }
      console.log(jsonParams.url);
      utils.sendAjax(jsonParams,(data)=>{
        console.log(data);
        this.article = data.data
      })
    }
  }
  }
</script>
<style lang="scss" scoped>
  .m-article {
    width: 100%;
    display: flex;
    .m-art-info {
      font-size: 16px;
      color: #785820;
      flex-direction: column;
      .m-art-time {
        text-align: center;
      }
      .m-art-uv {
        margin-top: 20px;
        width: 100%;
        text-align: center;
      }
    }
    .m-art-cnt {
      flex: 1 1 auto;
      font-size: 24px;
      padding: 30px;
      background: #d6c9b2;
      .m-art-title {
        color: #694b17;
        margin-bottom: 20px;
      }
      .m-art-tag {
        color: #785820;
        font-size: 18px;
        margin-bottom: 20px;
      }
      .u-art-ctn {
        color: #785820;
        font-size: 20px;
        line-height: 1.5;
      }
    }
  }

</style>
