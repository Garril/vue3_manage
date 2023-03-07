const { getMockData } = require('../index')

function getLoginMockData(
  obj = {
    'id|1-100': 100,
    token: '@guid()',
    name: '@name'
  }
) {
  return getMockData(obj)
}
// console.log(typeof getLoginMockData().data.id)
module.exports = {
  getLoginMockData
}
