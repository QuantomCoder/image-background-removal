import { Request,Response } from "express"
import {removeBackground} from "@imgly/background-removal-node"
import * as blobUtil from 'blob-util';
import fs from "fs"
import { pipeline } from "stream";
let localUploadController=async (req:Request,res:Response)=>{
try{
    if(req.file){
        const buffer = req.file?.buffer;
        console.log(req.file)
    console.log(req.file?.buffer)
    const blob = blobUtil.createBlob([buffer], { type: 'application/octet-stream' });
    console.log(blob)
   // let blob=new Blob(req.file?.buffer)
   const image=await removeBackground(blob)
   const array= await image.arrayBuffer()
   const arrayveiw= new Uint8Array(array)
//    const filetousedtosave=fs.createWriteStream(`./uploadsabc.png`)
   fs.writeFile(`./processUpload+${Date.now()}.png`,arrayveiw,(err)=>{
    if(err){
        console.log("error",err)
        res.send("error")
        return
    }
    console.log('done')
    res.send("image uploaded")
   })
   
}
   
}
catch(err){
    res.send("sorry")
}
}
export default{localUploadController}