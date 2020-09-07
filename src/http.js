import axios from 'axios';
import { Message, Loading } from 'element-ui';
import router from './router/index';

let loading;
function startLoding() {
    loading = Loading.service({
        lock: true,
        text: "拼命加载中",
        background: 'rgba(0,0,0,0.7)'
    });
}

function endLoading() {
    loading.close();
}

//请求拦截
axios.interceptors.request.use(config => {
    //加载动画
    startLoding();

    if(localStorage.blog_token){
        //设置统一的请求头
        config.headers.Authorization = localStorage.blog_token;
    }

    return config;
},
error => {
    return Promise.reject(error);
}
);

//响应拦截
axios.interceptors.response.use(response => {
    //结束加载动画
    endLoading();
    return response;
},
error => {
    console.log(error);
    //错误提醒
    endLoading();
    Message.error(error.response.data);


    //获取错误状态码
    const { status } = error.response;
    if(status == 401){
        Message.error('身份过期,请重新登录!');
        localStorage.removeItem('blog_token');
        router.push('/login')
    }
    return Promise.reject(error);
}
)


export default axios;
