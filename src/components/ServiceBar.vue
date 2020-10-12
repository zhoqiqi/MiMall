<template>
    <div class="service">
        <div class="container">
            <ul>
                <li><span class="icon-setting"></span>预约维修服务</li>
                <li><span class="icon-7day"></span>7天无理由退货</li>
                <li><span class="icon-15day"></span>15天免费换货</li>
                <li><span class="icon-post"></span>满150元包邮</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
   name: "service-bar",
   data() {
      return {
      }
   },
   mounted() {
   }
}
</script>
<style lang="scss">
@import './../assets/scss/mixin.scss';
.service {
    padding: 33px 0;
    color: #666666;
    font-size: 16px;
    li{
        display: inline-block;
        width: 24.9%;
        text-align: center;
        border-right: 1px solid #e5e5e5;
        span{
            display: inline-block;
            width: 20px;
            height: 20px;
            vertical-align: middle; // 设置元素的垂直对齐方式。
            margin-right: 8px;
        }
        .icon-setting{
            @include bgImg(20px, 20px, '/imgs/icon-setting.png', 20px);
        }
        .icon-7day{
            @include bgImg(20px, 20px, '/imgs/icon-7day.png', 20px);
        }
        .icon-15day{
            @include bgImg(20px, 20px, '/imgs/icon-15day.png', 20px);
        }
        .icon-post{
            @include bgImg(20px, 20px, '/imgs/icon-post.png', 20px);
        }
    }
}
</style>