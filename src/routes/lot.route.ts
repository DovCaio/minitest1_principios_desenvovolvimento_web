import { Router } from "express";
import { LotController } from "../controller/lot.controller";


const useRouter = Router();

useRouter.post("/", LotController.create);
useRouter.put("/:id", LotController.update);
useRouter.get("/:id", LotController.get);

export default useRouter;
