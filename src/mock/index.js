const Mock = require('mockjs')

/*
  var userInfo = Mock.mock({
    id: '@id()', //得到随机的id
    username: '@cname()', //随机生成中文名字
    date: '@date()', //随机生成日期
    avator: "@image('200x200','#50B347','#fff','avatar')", //生成图片，参数：size,background,foreground,text
    description: '@paragraph()', //描述
    ip: '@ip()', //IP地址
    email: '@email()' //email
  })
*/
// console.log(Mock.mock({ id: '@id()', token: '@sentence()' }))

function getMockData(obj) {
  const res = {
    data: Mock.mock(obj),
    code: 200
  }
  return res
}
module.exports = {
  getMockData
}
