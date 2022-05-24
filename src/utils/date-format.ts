import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export function formatUtcString(
  utcString: string,
  format: string = DATE_TIME_FORMAT
) {
  return dayjs.utc(utcString).format(format)
}

//服务器返回时间戳格式
// export function formatTimeStamp(
//   timestamp: number,
//   format: string = DATE_TIME_FORMAT
// ){
//   return ''
// }
