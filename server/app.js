let mongoClient = require("mongodb").MongoClient;
let express = require("express");
let cors = require("cors");

const {request, response} = require("express");
const { MongoClient } = require("mongodb");
let connectingString = "mongodb://127.0.0.1:27017";

let app= express();
app.use(cors()); //allow cors 
app.use(express.urlencoded({
    extended:true //convert binary object to object 
}))
app.use(express.json()); //convert object to json format


//   GET        /products            Fetch all products

app.get("/products",(request,response)=>{
    MongoClient.connect(connectingString).then((clientObject)=>
    {
        let database = clientObject.db("shopper");
        database.collection("products").find({}).toArray().then((documents)=>{
            response.send(documents);
            response.end();
        })
    })
})
app.get("/details/:id",(request,response)=>{
    let id = parseInt(request.params.id);
    MongoClient.connect(connectingString).then((clientObject)=>{
        let database = clientObject.db("shopper");
        database.collection("products").find({ProductId:id}).toArray().then((document)=>{
            response.send(document);
            response.end();
        })
    })
})
app.post("/addproducts",(request,response)=>{
    let product = {
        "ProductId": parseInt(request.body.ProductId),
        "Name": request.body.Name,
        "Price": parseFloat(request.body.Price),
        "Stock": (request.body.Stock=="true")?true:false
    }
    MongoClient.connect(connectingString).then((clientObject)=>{
        let database = clientObject.db("shopper");
        database.collection("products").insertOne(product).then((result)=>{
            console.log("Record Inserted");
            response.redirect("/products");
            response.end();
        })
    })
})
app.put("/updateproduct",(request,response)=>{
    MongoClient.connect(connectingString).then((clientObject)=>{
        let database = clientObject.db("shopper");
        let findQuery = {ProductId:parseInt(request.body.ProductId)};
        
    })
})

app.listen(8080);
