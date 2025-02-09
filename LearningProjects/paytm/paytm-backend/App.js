const { mongoConnect } = require("./config/database");
const bodyParser = require("body-parser");
const express = require("express");
const cors= require("cors");
const corsConfig=require("./config/cors");

const PORT = process.env.APP_PORT || 3000;

const indexRouter=require("./routes/index");
const usersRouter= require("./routes/users");


async function main() {
  try {
    const app = express();
    // app.use()
    await mongoConnect();
    
    app.use(cors(corsConfig));
    app.use(bodyParser.json());
    
    await app.use("/", indexRouter);
    await app.use("/api/v1/", usersRouter);

    app.listen(PORT, () => {
      console.log("app started...");
    });
  } catch (error) {
    console.log(error);
  }
}

main().then(()=> console.log("Main App Started///"))
.catch(err=>{
    console.log("error during app launch...\n" +err);
});
