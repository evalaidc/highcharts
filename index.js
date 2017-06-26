const express = require('express')
const app = express()

app.set("port", process.env.PORT || 3001)

app.use("/assets", express.static("public"))

app.use(express.static(__dirname + '/public'))


app.listen(app.get("port"), () => {
  console.log('App is listening')
})
