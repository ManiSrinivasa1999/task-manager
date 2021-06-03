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

const Task = require('./models/task')
const User = require('./models/user')
const main = async () => {
  // const task = await Task.findById('60b8de05c5ff11cb103b78ef')
  // await task.populate('owner').execPopulate()
  // console.log(task.owner)
  const user = await User.findById('60b8d0a1aecfd102c1d68cef')
  await user.populate('tasks').execPopulate()
  console.log(user.tasks)
}
main()
