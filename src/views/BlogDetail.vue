<template>
  <div class="blogWrapper">
    <div class="allBlogs">
      <div class="write-blog">
          <BlogHeader/>
          <el-button type="success" @click="addBlog">写文章</el-button>
      </div>
      <div class="single-Blog" v-for="(item,index) in allData" :key="index">
        <div class="singleBlog">
          <div class="avatar">
            <img src="../assets/avatar.png" alt />
          </div>
          <div class="right" @click="goDetail(index)">
            <div class="name-time">
              <span class="name">{{item.name}}</span>
              <span class="name">~前端</span>
            </div>
            <div class="blog-title">{{item.title}}</div>
            <div class="bottom">
              <i @click.stop="like(index)" class="fa fa-thumbs-up" aria-hidden="true"></i>
              <span>{{item.like}}</span>
              <i @click.stop="unlike(index)" class="fa fa-thumbs-down" aria-hidden="true"></i>
              <span>{{item.unlike}}</span>
              <i class="fa fa-commenting-o" aria-hidden="true"></i>   
            </div>
          </div>
        </div>
      </div>
    </div>

    
  </div>
</template>

<script>
import Dialog from '../components/Dialog';
import BlogHeader from '../components/BlogHeader';
export default {
  name: "blogDetail",
  components: {
      Dialog,
      BlogHeader
  },
  data() {
    return {
      allData: [],
      comment: "",
      dialog: {
        show: false,
      }
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios.get("/api/blogs").then(res => {
        this.allData = res.data;
      });
    },
    addBlog(){
        this.$router.push('/writeBlog')
    },
    update(){
        this.getData();
    },
    delBlog(index){
        let id = this.allData[index]._id;
        this.$axios.delete(`/api/blogs/delete/${id}`)
            .then(res => {
                this.$message({
                    message: "删除成功",
                    type: "success"
                });
                this.getData();
            })
            .catch(err => console.log(err))
    },
    like(index){
        let id = this.allData[index]._id;
        this.$axios.post(`/api/blogs/${id}/like`)
            .then(res => {
                this.$message({
                    message: "点赞成功",
                    type: "success"
                });
                this.getData();
            })
            .catch(err => {console.log(err)})
    },
    unlike(index){
        let id = this.allData[index]._id;
        this.$axios.post(`/api/blogs/${id}/unlike`)
            .then(res => {
                this.$message({
                    message: "不喜欢成功",
                    type: "success"
                });
                this.getData();
            })
            .catch(err => {console.log(err)})
    },
    goDetail(index){
      let id = this.allData[index]._id;
      this.$router.push({name: 'singleBlog', params: {id}})
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
.allBlogs {
  width: 100%;
  padding: 20px 0;
}
.write-blog {
  width: 100%;
  display: flex;
  padding: 12px;
  justify-content: space-between;
}
.singleBlog {
  display: flex;
  width: 100%;
  margin-bottom: 20px;
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
  display: flex;
  justify-content: space-between;
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
  font-size: 14px;
  line-height: 2;
}
.blog-content{
    width: 100%;
    padding: 20px 30px;
    margin: 10px 0;
    border: 1px solid #1989FA;
}
.bottom {
  width: 100%;
  margin: 12px 0 0;
  display: flex;
  align-items: center;
  color: #B2BAC2;
  cursor: pointer;
}
.bottom i {
  color: rgba(0, 0, 0, 0.4);
  margin: 0 10px 0 0;
}
.bottom span {
  margin: 0 10px 0 0;
}
</style>