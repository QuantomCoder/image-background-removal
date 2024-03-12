import { Router } from "express";
import {localUpload,memoryUpload} from "../middleware/imgUpload"
import localUploadController from "../controller/imgRemoval.controller" 
const route=Router();
route.post("/",memoryUpload.single("img"),localUploadController.localUploadController)
export default route