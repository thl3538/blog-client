<template>
    <div class="wrapper">
        <div class="header">
            <div class="left">
                <ul v-for="(item,index) in nav" :key="index">
                    <li class="nav-item" :class="{'active': index == currentIndex}">{{item}}</li>
                </ul>
            </div>
            <div class="right">
                <i class="fa fa-bullhorn mr" aria-hidden="true"></i>
                <span>活动合作</span>
            </div>
        </div>
        <div class="swipper-date">
            <div class="swipper">
                    <el-carousel>
                    <el-carousel-item v-for="(item,index) in swipers" :key="index">
                        <img :src="item.src" alt="">
                    </el-carousel-item>
                    </el-carousel>
            </div>
        </div>
        <div class="ad">
            <div class="ad-wrap" v-for="(item,index) in ad" :key="index">
                <img :src="item.src" alt="">
                <div class="message">
                    <div class="title">{{item.title}}</div>
                    <div class="date">
                        {{item.time}}
                    </div>
                    <div class="bottom">
                        <div class="address">{{item.place}}</div>
                        <div class="btn">报名参加</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "home",
    data(){
        return{
            nav: ["热门活动","北京","上海","热门活动","深圳","广州","其它"],
            currentIndex: 0,
            swipers: [{
                        src: require("../assets/banner1.jpg")
                    },
                    {
                        src: require("../assets/banner2.png")
                    },
                    {
                        src: require("../assets/banner4.jpg")
                    },
                    {
                        src: require("../assets/banner5.png")
                    }
                ],
                ad: [
                    {
                        src: require("../assets/1.jpg"),
                        title: "字节跳动【安全范儿】沙龙",
                        time: "06-05 周五",
                        place: "不限"
                    },
                    {
                        src: require("../assets/2.jpg"),
                        title: "开发者硬核个人成长指南-如何领先80%的同行？",
                        time: "06-06 周六",
                        place: "不限"
                    },
                    {
                        src: require("../assets/3.jpg"),
                        title: "TiDB DevCon 2020",
                        time: "06-06 周六",
                        place: "不限"
                    },
                    {
                        src: require("../assets/4.jpg"),
                        title: "第九届前端早聊大会|前端搞文档",
                        time: "06-13 周六",
                        place: "不限"
                    },
                    {
                        src: require("../assets/5.jpg"),
                        title: "第九届前端早早聊大会 | 前端搞文档",
                        time: "06-05 周五",
                        place: "不限"
                    },
                    {
                        src: require("../assets/6.jpg"),
                        title: "Pulsar Summit 2020 线上峰会",
                        time: "06-05 周五",
                        place: "不限"
                    },
                    {
                        src: require("../assets/7.jpg"),
                        title: "腾讯直播大会 TLC 2020",
                        time: "06-05 周五",
                        place: "不限"
                    },
                    {
                        src: require("../assets/8.jpg"),
                        title: "数据智能助力产业数字化转型",
                        time: "06-05 周五",
                        place: "不限"
                    },
                    {
                        src: require("../assets/9.jpg"),
                        title: "数据智能助力产业数字化转型",
                        time: "06-05 周五",
                        place: "不限"
                    },
                    {
                        src: require("../assets/10.jpg"),
                        title: "明势资本: 2020年开源峰会 │ 5月17日",
                        time: "06-05 周五",
                        place: "不限"
                    },
                ]
        }
    }
}
</script>

<style scoped>
.wrapper{
    width: calc(100% - 180px);
    height: 100%;
    box-sizing: border-box;
    margin: 0 50px;
}
.header{
    width: 100%;
    height: 45px;
    margin: 0 50px;
    display: flex;
    justify-content: space-around;
}
.left{
    display: flex;
    align-items: center;
}
.nav-item{
    display: block;
    padding: 0 12px;
    color: #71777c;
}
.active{
    color: #4d91fd;
}
.right{
    display: flex;
    align-items: center;
    color: #71777c;
}
.right .mr{
    margin: 10px
}
.swipper-date{
    display: flex;
    align-items: center;
    justify-content: center;
}
.swipper{
    display: block;
    width: 1200px;
    height: 300;
}
.ad{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    margin-top: 30px;
}
.ad-wrap{
    width: 230px;
    margin: 0px 0px 30px;
    padding: 0px 7px;
}
.ad-wrap img{
    width: 230px;
    height: 135px;
    background: #ccc;
}
.message{
    width: 100%;
    padding: 20px 12px 15px;
    color: #333;
    border: 1px solid #eee;
    box-sizing: border-box;
}
.title{
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    height: 40px;
    font-size: 14px;
    font-weight: 700;
}
.date{
    margin-top: 6px;
    color: #333;
    font-size: 12px;
}
.bottom{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    margin: 6px 0 0;
}
.btn{
    width: 100px;
    height: 25px;
    border-radius: 30px;
    background-color: #4d91fd;
    line-height: 25px;
    color: #fff;
    text-align: center;
}
</style>