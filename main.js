import { MongoClient } from "mongodb";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors()); //Allow all users

//required for post method
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//Save user record
async function addUserRecord(req, res) {
  try {
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);

    const db = client.db("smart");
    const messageColl = db.collection("user");

    let inputDoc = {
      name: req.query.name,
      email: req.query.email,
      username: req.query.username,
      password: req.query.password,
      mobile: req.query.mobile,
    };
    await messageColl.insertOne(inputDoc);

    await client.close();
    res.json({ opr: "Success" });
  } catch (err) {
    //res.json({ opr: "Failed" });
    res.status(500).send("Error" + err.message);
  }
}

//Display all the charges
async function packageList(req, res) {
  try {
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);

    const db = client.db("smart");
    const messageColl = db.collection("pickup");
    // let inputDoc = {                                            //
    //   state: req.query.state,
    //   city: req.query.city,
    //   waste: req.query.waste,
    // };      //
    let list = await messageColl.find().toArray();          //he brobr wla ahe
   // let list = await messageColl.findOne(query);                          //
   // await messageColl.insertOne(inputDoc);                             //
    await client.close();
    res.json(list);
  } catch (err) {
    res.status(500).send("Error" + err.message);
  }
}

//Login of user by GET method
async function loginByGet(req, res) {
  try {
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);

    const db = client.db("smart");
    const messageColl = db.collection("user");

    let query = { email: req.query.email, password: req.query.password };
    let userRef = await messageColl.findOne(query);

    await client.close();

    //If userRef is not found
    if (!userRef) {
      let errorMessage = `User Not Found :  ${req.query.email}`;
      throw new Error(errorMessage);
    }

    //If userRef is found
    res.json(userRef);
  } catch (err) {
    res.status(500).send("Error" + err.message);
  }
}

//Login of user by POST
async function loginByPost(req, res) {
  try {
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);

    const db = client.db("smart");
    const messageColl = db.collection("user");

    let query = { email: req.body.email, password: req.body.password };
    let userRef = await messageColl.findOne(query);

    await client.close();

    //If userRef is not found
    if (!userRef) {
      let errorMessage = `User Not Found :  ${req.body.email}`;
      throw new Error(errorMessage);
    }

    //If userRef is found
    res.json(userRef);
  } catch (err) {
    res.status(500).send("Error " + err.message);
  }
}

 app.get("/adduser", addUserRecord);
app.get("/packagelist", packageList);
app.get("/login-by-get", loginByGet);
app.post("/login-by-post", loginByPost);
app.get("/addUserReq", addUserReq);
app.put("/editUserReq/name",editUserReq);                  //
// http://localhost:4000
 app.listen(4000,()=>{
    console.log("Server started at port 4000")
 });

//Add user requests in DB
async function addUserReq(req, res) {
  try {
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);

    const db = client.db("smart");
    const messageColl = db.collection("User Request");

    let inputDoc = {
      name: req.query.name,
      state: req.query.state,
      city: req.query.city,
      waste: req.query.waste,
    };
    await messageColl.insertOne(inputDoc);

    await client.close();
    res.json({ opr: "Success" });
  } catch (err) {
    res.status(500).send("Error" + err.message);
  }
}

async function editUserReq(req, res) {                         //
  try {
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);

    const db = client.db("smart");
    const messageColl = db.collection("User Request");

    let inputDoc = {
      name: req.query.name,
      state: req.query.state,
      city: req.query.city,
      waste: req.query.waste,
    };
    await messageColl.updateOne({name:req.query.name},inputDoc);

    await client.close();
    res.json({ opr: " updation Success " });
  } catch (err) {
    res.status(500).send("Error" + err.message);
  }
}

// app.put("/student/:roll",async(request,response)=>{
//   try {
//       await Student.updateOne({roll:request.params.roll},request.body);
//       response.send({message:UPDATE_SUCCESS});
//   } catch (error) {
//       response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
//   }
// });
