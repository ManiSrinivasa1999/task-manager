// CRUD operations -> create, read, update, delete

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017"; // don't use localhost:27017
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL, // connection url
  {
    useNewUrlParser: true,
  },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }
    const db = client.db(databaseName);
    const users = db.collection("users");
    const tasks = db.collection("tasks");
    tasks
      .deleteOne({
        description: "Course to be complted By May 27",
      })
      .then((res) => {
        console.log(res.deletedCount);
      })
      .catch((err) => {
        console.log(err);
      });
  }
);
