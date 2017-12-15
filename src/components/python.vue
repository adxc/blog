<template>
  <div class="m-bd">
    <div class="m-article">
      <ul class="m-art-list">
        <li class="m-art-item">
          <div class="m-art-info">
            <dl>
              <dt>2017年08月09号</dt>
              <dd>2017 08 09</dd>
              <dd>
                <label for="">时间: </label>15:36</dd>
            </dl>
          </div>
          <div class="m-art-detail">
             <a href="#">
                <dl>
              <dt>用 Python 3 的 async / await 做异步编程</dt>
              <dd>
                <label for="">分类:</label> Python
                <label for="">标签:</label> Python
              </dd>
              <dd>前年我曾写过一篇《初探 Python 3 的异步 IO 编程》，当时只是初 步接触了一下 yield from 语法和 asyncio 标准库。前些日子我在 V2EX 看到一篇《为什么只有基于生成器的协程可以真正的暂停执
                行并强制性返回给事件循环？》，激起了我再探 Python 3 异步编程</dd>
            </dl>
           </a>
          </div>
        </li>
        <li class="m-art-item">
          <div class="m-art-info">
            <dl>
              <dt>2017年08月09号</dt>
              <dd>2017 08 09</dd>
              <dd>
                <label for="">时间: </label>15:36</dd>
            </dl>
          </div>
          <div class="m-art-detail">
           <a href="#">
                <dl>
              <dt>用 Python 3 的 async / await 做异步编程</dt>
              <dd>
                <label for="">分类:</label> Python
                <label for="">标签:</label> Python
              </dd>
              <dd>前年我曾写过一篇《初探 Python 3 的异步 IO 编程》，当时只是初 步接触了一下 yield from 语法和 asyncio 标准库。前些日子我在 V2EX 看到一篇《为什么只有基于生成器的协程可以真正的暂停执
                行并强制性返回给事件循环？》，激起了我再探 Python 3 异步编程</dd>
            </dl>
           </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Python'
  }

</script>
<style lang="scss" scoped>
  .m-article {
    .m-art-list {
         border-left: 1px solid #a1824c;
         padding-left: 20px;
         li{
             list-style-type: square ;
         }
      .m-art-detail {
        flex: 0 1 auto;
      }
    }
  }

</style>
