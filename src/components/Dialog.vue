<template>
  <div class="edit_container">
    <div class="back" @click="goBack">
      <i class="el-icon-back"></i>返回
    </div>
    <el-input
    class="input"
    type="textarea"
    autosize
    placeholder="请输入文章标题"
    v-model="form.title">
    </el-input>
    <quill-editor
      v-model="form.blog"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
    ></quill-editor>
    <el-button @click="onSubmit" class="btn" type="primary">发布文章</el-button>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  data() {
    return {
        form: {
            title: "",
            blog: `### 用everyone－Markdown 编辑器写文章
            欢迎使用 everyone－Markdown 编辑器撰写技术文章，只专注于内容和技术，不再费心排版的问题。`,
        },
        editorOption: {}
    };
  },
  
  methods: {
    onEditorReady(editor) {
      // 准备编辑器
    },
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange() {}, // 内容改变事件
    saveHtml: function(event) {
      alert(this.content);
    },
    onSubmit(){
        if(this.form.title.length == 0 || this.form.blog.length == 0){
            this.$message({
                message: "文章标题或内容不能为空",
                type: "warning"
            })
        }else{
            this.$axios.post(`/api/blogs/add`, this.form).then(res => {
            // 操作成功
            this.$message({
              message: "发布文章成功！",
              type: "success"
            });
            this.$router.go(-1);
          });
        }
    },
    goBack(){
      this.$router.go(-1);
    }
  }
};
</script>

<style>
.edit_container {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 20px 60px; 
  width: 50%;
  margin: 0 auto;
}
.back{
  float: left;
  font-weight: 600;
  color: #007FFF;
  font-size: 16px;
}
.back i{
  font-size: 16px;
  color: #007FFF;
  font-weight: bold;
}
.input{
    margin: 20px 0;
}
.title{
    width: 100%;
    min-height: 20px;
    margin-bottom: 20px;
    border: 1px solid black ;
}
.btn{
    width: 100%;
    margin: 20px 0;
}
</style>
