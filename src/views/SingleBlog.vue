<template>
  <div class="blogWrapper">
    <div class="back" @click="goBack">
      <i class="el-icon-back"></i>返回
    </div>
    <div class="allBlogs">
      <div class="single-Blog">
        <div class="singleBlog">
          <div class="avatar">
            <img src="../assets/avatar.png" alt />
          </div>
          <div class="right">
            <div class="name-time">
              <span class="name">{{allData.name}}</span>
              <span class="time">{{time}}</span>
            </div>
            <div class="blog-title">{{allData.title}}</div>
            <div class="blog-content">{{allData.blog}}</div>
            <div class="bottom">
              <i @click="like(index)" class="fa fa-thumbs-up" aria-hidden="true"></i>
              <span>{{allData.like}}</span>
              <i @click="unlike(index)" class="fa fa-thumbs-down" aria-hidden="true"></i>
              <span>{{allData.unlike}}</span>
              <i @click="delBlog(index)" class="fa fa-trash-o" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div class="comment">
            <div class="blog-title">
                基本评论
                <i class="fa fa-commenting-o" aria-hidden="true"></i>
            </div>
            <div class="addComment">
                <el-input class="input" v-model="inputValue" placeholder="请输入评论内容"></el-input>
                <div class="btn">
                  <el-button @click="addComment" :disabled="isValue(inputValue)" type="primary">评论</el-button>
                </div>
            </div>
            <div class="comment-content" v-if="comment.length > 0">
                <div  class="comment-single" v-for="(item,index) in comment" :key="index" >
                  <div class="comment-content" v-html="item.content">
                  </div>
                  <i @click.stop="delComment(index)" class="fa fa-trash-o" aria-hidden="true"></i>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "singleBlog",
  data() {
    return {
      allData: [],
      inputValue: "",
      comment: [],
      id: "",
      time: ""
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
        const id = this.$route.params.id;
        this.id = id;
        this.$axios.get(`/api/blogs/${id}`).then(res => {
        this.allData = res.data;
        this.comment = this.allData.comment;
        const date = this.allData.date;
        const d = new Date(date);
        const secDate = d.getFullYear() + '-' + (d.getMonth() + 1)  + '-' + d.getDate();
        this.time = secDate;
        });
    },
    isValue(val){
      if(val.length>0){
        return false;
      }else{
        return true;
      }
    },
    addBlog(){
        this.dialog.show = true;
    },
    update(){
       let id = this.id;
       this.$axios.get(`/api/blogs/${id}`).then(res => {
        this.allData = res.data;
        this.comment = this.allData.comment;    
        });
    },
    delBlog(index){
        let id = this.id;
        this.$axios.delete(`/api/blogs/delete/${id}`)
            .then(res => {
                this.$message({
                    message: "删除成功",
                    type: "success"
                });
                this.update();
                this.$router.push({path: 'blogDetail'});
            })
            .catch(err => console.log(err))
    },
    like(index){
        let id = this.id;
        this.$axios.post(`/api/blogs/${id}/like`)
            .then(res => {
                this.$message({
                    message: "点赞成功",
                    type: "success"
                });
                this.update();
            })
            .catch(err => {console.log(err)})
    },
    unlike(index){
        let id = this.id;
        this.$axios.post(`/api/blogs/${id}/unlike`)
            .then(res => {
                this.$message({
                    message: "不喜欢成功",
                    type: "success"
                });
                this.update();
            })
            .catch(err => {console.log(err)})
    },
    addComment(){
        let id = this.id;
        let content = this.inputValue;
        const comment = {
            name: this.allData.name,
            content
        }
        console.log(comment,id)
        this.$axios.post(`/api/blogs/${id}/comment`,comment)
            .then(res => {
                if(res.status == 200){
                    this.$message({
                        message: "评论成功",
                        type: "success"
                    });
                    this.inputValue = ""
                    this.update();
                }
            })
            .catch(err => console.log(err))
    },
    delComment(index){
        let commentId = this.comment[index]._id;
        this.$axios.get(`/api/blogs/${this.id}/delcomment?id=${commentId}`)
          .then(res => {
            this.$message({
              message: "删除评论成功",
              type: "success"
            })
          })
          this.update();
    },
    goBack(){
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.blogWrapper {
  width: 60%;
  margin: 0 auto;
  padding: 0 32px;
}
.back{
  display: block;
  margin: 20px 0 20px 0;
  padding: 0 32px;
  color: #007FFF;
  font-size: 16px;
}
.back i{
  font-size: 20px;
  font-weight: bold;
}
.allBlogs {
  width: 100%;
  padding: 20px 0;
}
.write-blog {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  padding: 12px;
  min-width: 100px;
}
.singleBlog {
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  padding: 0 32px;
}
.avatar {
  width: 32px;
  margin: 0 21px 0 0;
}
.avatar img {
  width: 32px;
  height: 32px;
}
.right {
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 14px;
}
.name-time {
  width: 100%;
  margin: 0 0 4px;
}
.name-time .name {
  color: rgba(0, 0, 0, 0.3);
  padding: 0 8px 0 0;
}
.name-time .time {
  color: #ccc;
}
.blog-title {
  color: rgba(0, 0, 0, 0.85);
  font-size: 18px;
  font-weight: bold;
  color: #333;
  line-height: 1.5;
  padding: 0 32px;
}
.blog-content{
    box-sizing: border-box;
    width: 530px;
    padding: 20px 30px;
    margin: 10px 0;
    font-size: 15px;
    color: #333;
    line-height: 1.5;
}
.bottom {
  width: 100%;
  margin: 12px 0 0;
  display: flex;
  align-items: center;
}
.bottom i {
  color: rgba(0, 0, 0, 0.4);
  margin: 0 4px 0 0;
}
.bottom span {
  margin: 0 10px 0 0;
}
.comment .comment-title {
  color: rgba(0, 0, 0, 0.85);
}
.comment i{
    color:rgba(0, 0, 0, 0.4);
    margin-right: 10px;
}
.comment .addComment{
    display: flex;
    width: 100%;
    padding: 0 32px;
    justify-content: space-between;
    box-sizing: border-box;
}
.comment .addComment .input{
  width: 600px;
}
.addComment .btn{
  width: 70px;
}
.comment .comment-content{
    padding: 10px 16px;
    font-size: 12px;
    line-height: 2;
    color: #505050;
}
.comment .comment-single{
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
}
</style>