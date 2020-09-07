<template>
    <div class="Nav">
        <ul v-for="(item,index) in nav" :key="index">
            <li 
            class="nav-item" 
            :class="{'active' : index == currentIndex }"
            @click="changeColor(index)"
            >{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "BlogHeader",
    data(){
        return{
            nav: ["推荐","关注","后端","ios","人工智能","人工智能","开发工具","代码人生","阅读"],
            currentIndex: 0
        }
    },
    methods: {
        changeColor(index){
            this.currentIndex = index;
        }
    }
}
</script>

<style scoped>
.Nav{
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    line-height: 1;
    margin: auto;
    font-size: 12px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
}
.nav-item{
    display: flex;
    margin: 0 12px;
    color: #71777c;
}
.active{
    color: #007FFF;
}
</style>

