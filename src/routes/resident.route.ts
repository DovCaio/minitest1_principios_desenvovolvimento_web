import { Router } from "express";
import { ResidentController } from "../controller/resident.controller";

const useRouter = Router();

useRouter.post("/", ResidentController.create);


export default useRouter;
