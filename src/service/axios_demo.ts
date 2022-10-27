import axios from 'axios'

//axios的实例
axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res.data)
})

//模拟get请求并且传入参数
// axios.get('http://httpbin.org/get',{
//   params:{
//     name:'jocelin',
//     age:18
//   }
// }).then((res)=>{
//   console.log(res.data)
// })
// post请求
axios
  .post('http://httpbin.org/post', {
    data: {
      name: 'why',
      age: 22
    }
  })
  .then((res) => {
    console.log(res.data)
  })
// axios.request({
//   method:'GET'
// })
//Promise本身是可以有类型的
// new Promise<string>((resolve,reject)=>{
//   resolve('1234')
// }).then((res)=>{
//   console.log(res.length)
// })

//axios配置选项
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 10000
//axios.default.headers = {}
axios
  .get('/get', {
    params: {
      name: 'jocelin',
      age: 18
    },
    timeout: 5000,
    headers: {}
  })
  .then((res) => {
    console.log(res.data)
  })

//axios.all  多个请求，一起返回
axios
  .all([
    axios.get('/get', {
      params: {
        name: 'jocelin',
        age: 23
      }
    }),
    axios.post('/post', {
      params: {
        name: 'jocelin',
        age: 123
      }
    })
  ])
  .then((res) => {
    console.log(res)
    console.log(res[0].data)
    console.log(res[1].data)
  })

//axios的拦截器
//fn1:请求发送成功会执行的函数
//fn2请求发送失败会执行的函数
axios.interceptors.request.use(
  (config) => {
    //想做的一些操作
    //1.给请求添加token
    //2.isLoading动画
    console.log('请求成功拦截')
    return config
  },
  (err) => {
    console.log('请求发送错误')
    return err
  }
)
//fn1:数据响应成功(服务器正常的返回了数据)
//fn2:数据响应失败
axios.interceptors.response.use(
  (res) => {
    console.log('响应成功的拦截')
    return res
  },
  (err) => {
    console.log('服务器响应失败')
    return err
  }
)
