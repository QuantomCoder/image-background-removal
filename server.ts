import express, { json } from "express";
import route from "./src/routes/img.route";
// import amity from "./src/amity/client";
const server= express();
// amity()
server.use(json())
server.use("/uploads", express.static("uploads"))
server.use("/img",route)
server.listen(4003,()=>{
    console.log("I am working")
})