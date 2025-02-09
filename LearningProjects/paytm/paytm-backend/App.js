const { mongoConnect } = require("./config/database");
const bodyParser = require("body-parser");
const express = require("express");
const PORT = process.env.APP_PORT || 3000;

const home=require("./routes/home");

async function main() {
  try {
    const app = express();
    // app.use()
   await mongoConnect();

    app.use(bodyParser.json());
    app.use("/", (req, res) => {
      res.send("Started...");
    });

    app.use("/user",home);

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
