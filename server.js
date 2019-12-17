const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, '/')))
console.log(path.join(__dirname, 'template'))

app.listen('6683', () => {
  console.log('端口 6683 启动')
})