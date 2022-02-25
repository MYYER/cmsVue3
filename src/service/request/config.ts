//1.手动切换
// const BASE_URL = 'http://jocelin.org/dev'
// const BASE_NAME = 'jocelin'

// const BASE_URL = 'http://jocelin.org/prod'
// const BASE_NAME = 'jocelin'

// const BASE_URL = 'http://jocelin.org/test'
// const BASE_NAME = 'jocelin'

//2.根据process.env.NODE_ENV
//开发环境: development
//生产环境: production
//测试环境: test
let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://123.207.32.32:8000/'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://jocelin.org/prod'
} else {
  BASE_URL = 'http://jocelin.org/test'
}

export { BASE_URL, TIME_OUT }
