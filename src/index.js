const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// middleware functions

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('Get req are disabled')
//   } else {
//     next()
//   }
// })

// app.use((req, res, next) => {
//   res.status(503).send('Site is down')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

const server = app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})

// server.close()
