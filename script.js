const fs = require('fs')
const lodash = require('lodash')

setTimeout(() => {
  fs.writeFileSync('./index.html', 
  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    
  </body>
  </html>`,
  (error) => {
    error ? console.log(error) : null
  })
},1000)

fs.mkdirSync('./styles', () => { })

setTimeout(() => {
  fs.writeFileSync('./styles/style.css', `*{\n  margin : 0;\n  padding: 0;\n  box-sizing: border-box;\n}`, (error) => {
    error ? console.log(error) : null
  })
},1000)

fs.existsSync('./styles')

setTimeout(() => {
  fs.unlink('./styles/style.css', () => { })
},7000)

setTimeout(() => {
  fs.rmdir('./styles', () => { })
},7500)

setTimeout(() => {
  fs.unlink('./index.html', () => { })
},7000)