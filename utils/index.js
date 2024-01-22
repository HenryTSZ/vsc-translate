/**
 * 生成区间随机数
 * @param start 开始大小
 * @param end 结束大小
 * @returns
 */
const getRandomNumber = (start, end) => Math.random() * (end - start) + start

/**
 * 随机key生成方法
 * @param length key长度
 * @returns
 */
const getUniqueKey = (length = 10) => {
  const num = '0123456789'
  const lowercase = 'abcdefghijklmnopqrstuvwxyz'
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const chars = `${num}${lowercase}${uppercase}`
  const end = chars.length
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars[getRandomNumber(0, end)]
  }
  return result
}

/**
 * 字符串去首尾空格
 * @param text 文本
 * @returns
 */
const stringTrim = text => {
  return String(text).trim()
}

/**
 * 将英文单词用空格分隔
 * @param str
 * @returns
 */
const transform = str => {
  return str.replace(/[^a-zA-Z]+|(?<=[a-z])([A-Z])(?=[a-z])/g, (match, p1) => {
    // If p1 is defined, it means we matched an uppercase letter flanked by lowercase letters
    if (p1) {
      return ' ' + p1.toLowerCase()
    }
    // Otherwise, we matched one or more non-letter characters
    return ' '
  })
}

module.exports = {
  getRandomNumber,
  getUniqueKey,
  stringTrim,
  transform
}
