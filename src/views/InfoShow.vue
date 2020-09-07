<template>
    <div class="wrapper">
        <div class="left">
            <div class="top">
                <div class="avatar">
                    <img src="https://b-gold-cdn.xitu.io/v3/static/img/default-avatar.e30559a.svg" alt="">
                </div>
                <div class="like">
                    <h3>lishuguai</h3>
                    <div class="job">+你从事的职业是什么?</div>
                    <div class="belive">+你的武器库有哪些?</div>
                </div>
                <div class="action-box">
                    <div class="link-box">
                        <i class="fa fa-weibo" aria-hidden="true"></i>
                        <i class="fa fa-github" aria-hidden="true"></i>
                        <i class="fa fa-globe" aria-hidden="true"></i>
                    </div>
                    <div class="seting-btn">编辑个人资料</div>
                </div>
            </div>
            <div class="attention">
                <div class="header-content">
                    <ul v-for="(item,index) in title" :key="index">
                        <li @click="active(index)" class="header-item" :class="{'active' : index == currentIndex}">{{item}}</li>
                    </ul>
                </div>
                <div class="payattention">
                    <div class="all" v-for="(item,index) in paytion" :key="index">
                        <div class="single">
                            <img src="https://b-gold-cdn.xitu.io/v3/static/img/default-avatar.e30559a.svg" alt="">
                            <span>{{user.name}}</span>{{item}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="stickey">
                <div class="follow-item">
                    <div class="item-title">关注了</div>
                    <div class="item-count">5</div>
                </div>
                <div class="follow-item">
                    <div class="item-title">关注者</div>
                    <div class="item-count">5</div>
                </div>
            </div>
            <div class="more-item">
                <div>收藏集</div>
                <div>1</div>
            </div>
            <div class="more-item">
                <div>关于标签</div>
                <div>27</div>
            </div>
            <div class="more-item">
                <div>加入于</div>
                <div>2020-05-27</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "InfoShow",
    data(){
        return{
            title: ["动态","专栏","沸点","分享","赞","小册","更多"],
            currentIndex: 0,
            paytion: ["关注了MVVM","关注了黑客","关注了Chrome"]
        }
    },
    computed: {
        user(){
            return this.$store.getters.user;
        }
    },
    methods: {
        active(index){
            this.currentIndex = index;
        }
    }
}
</script>

<style scoped>
.wrapper{
    box-sizing: border-box;
    margin: 10px 100px 0; 
    display: flex;
}
.top{   
    width: 708px;
    padding: 30px;
    display: flex;
    border-bottom: 1px solid rgba(230,230,231,.5);;
}
.avatar img{
    width: 90px;
    height: 90px;
    margin-right: 28.8px;
    border-radius: 45px;
}
.like h3{
    width: 387px;
    height: 31px;
    font-size: 20px;
    font-weight: 700;
}
.like .job{
    color: #4a68ad;
    margin-top: 12px;
}
.like .belive{
     color: #4a68ad;
    margin-top: 12px;
}
.action-box{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.link-box{
    width: 87px;
    height: 21px;
}
.link-box i{
    width: 21px;
    height: 21px;
    margin-right: 5px;
    color: #666;
}
.seting-btn{
    width: 118px;
    height: 34px;
    border: 1px solid #3780f7;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #3780f7;
}
.attention{
    width: 708px;
    box-sizing: border-box;
    height: 100%;
}
.header-content{
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(230,230,231,.5);
}
.header-item{
    width: 90px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #31445b;
    border-bottom: 1px solid rgba(230,230,231,.5);
}
.active{
    color: #3780f7;
    border-bottom: 2px solid #3780f7;
}
.payattention{
    width: 708px;
    height: 80px;  
}
.single{
    display: flex;
    align-items: center;
    padding: 16px 20px;
    border-bottom: 1px solid rgba(230,230,231,.5);
    color: #8A9AA9;
}
.single img{
    width: 45px;
    height: 45px;
    margin-right: 10px;
}
.right{
    width: 240px;
    display: flex;
    align-items: center;
    margin-left: 10px;
    flex-direction: column;
}
.stickey{
    width: 100%;
    display: flex;
}
.stickey .follow-item{
    width: 50%;
    height: 75px;
    padding: 16px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-bottom: 1px solid rgba(230,230,231,.5);
}
.follow-item .item-title{
    width: 100%;
    font-size: 16px;
    text-align: center;
    color: #8A9AA9;
}
.follow-item .item-count{
    width: 100%;
    color: #31445b;
    margin: 6px 0 0;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
}
.more-item{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    border-bottom: 1px solid rgba(230,230,231,.5);
}
</style>