const fs = require('fs')
const path = require('path')
function readFile(pathname){
  return new Promise((resolve, reject) => {
    const resolvePath = path.resolve(pathname)
    fs.readFile(resolvePath, 'utf8', (err, result) => {
      if(err !== null){
        return reject(err)
      }
      resolve(result)
    })
  })
}
module.exports = {readFile}