const mongoose = require("mongoose")
const validator = require("validator")

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
})

const User = new mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(val) {
      if (val.toLowerCase().includes("password")) {
        throw new Error("Password cannot contain 'password'")
      }
    },
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(val) {
      if (!validator.isEmail(val)) {
        throw new Error("Email is invalid")
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(val) {
      if (val < 0) {
        throw new Error("Age must be a positive number")
      }
    },
  },
})

// const me = new User({
//   name: "   Mani  ",
//   email: "ManiSrinivaSA1999@gmail.com    ",
//   password: "ManiManju3@",
// })

// me.save()
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

const Task = new mongoose.model("Task", {
  description: {
    type: String,
    trim: true,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

const task = new Task({
  description: "Target 15L",
  completed: false,
})

task
  .save()
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
