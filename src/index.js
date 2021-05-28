const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

const server = app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})

// server.close()

const bcrypt = require('bcryptjs')
const myFunction = async () => {
  const password = 'ManiManju'
  const hashedPassword = await bcrypt.hash(password, 8)
  // console.log(password, hashedPassword)

  const isMatch = await bcrypt.compare('ManiManju3', hashedPassword)
  // console.log(isMatch)
}
myFunction()
