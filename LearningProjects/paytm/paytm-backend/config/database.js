const mongoose =require("mongoose");
const dotenv=require("dotenv");


dotenv.config()

mongoose.Promise=global.Promise;
const connect= mongoose.connection;

mongoose.set("strictQuery",true)



const mongoConnect= async()=>{

    const dbUrl= process.env.MONGO_URL
    connect.on('connected',async()=>{
        console.log("Connection established with db...")
    })

    connect.on("reconnect",async()=>{
        console.log("ReEstablish connection with db..");
    })

    connect.on("disconnected",async()=>{
        console.log("Db disconnected..")
        console.log("Trying Db reconnection..")

        setTimeout(()=>{
            mongoose.connect(dbUrl, {
              useUnifiedTopology: true,
            //   keepAlive: true,
            //   socketTimeourMS: 3000,
            //   connectTimeoutMS: 3000,
            });
        },3000)
    })

    connect.on('close',async()=>{
        console.log("Db connection lost;...")
    })

    connect.on('error',async()=>{
        console.log("Error during db connection..")
    })

    await mongoose
      .connect(dbUrl, {
        useUnifiedTopology: true,
      })
      .catch((error) =>
        console.error("Error during db connection.. \n" + error)
      );
}

module.exports={mongoConnect}