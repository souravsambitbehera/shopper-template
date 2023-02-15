let mongoClient = require("mongodb").MongoClient;
let express = require("express");
let cors = require("cors");
const { request, response } = require("express");

let connectingString = "mongodb://127.0.0.1:27017";

let app = express();

app.use(cors());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.get("/users", (request,response)=>{
    mongoClient.connect(connectingString).then((clientObject)=>{
        let database = clientObject.db("shopper");
        database.collection("users").find({}).toArray().then((documents)=>{
            response.send(documents)
        })
    })  
});
app.post("/registeruser", (request,response)=>{
    let user = {
    "UserId": request.body.UserId,
    "UserName": request.body.UserName,
    "Password": request.body.Password,
    "Email": request.body.Email,
    "Age": parseInt(request.body.Age),
    "Mobile": request.body.Mobile
    }

    mongoClient.connect(connectingString).then((clientObject)=>{
        let database = clientObject.db("shopper");
        database.collection("users").insertOne(user).then((result)=>{
            console.log("record inserted");
            response.redirect("/users");
        })
    })
});


app.listen(5000);
console.log("server started : http://127.0.0.1:5000");