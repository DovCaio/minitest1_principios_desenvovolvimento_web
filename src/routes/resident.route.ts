import { Router } from "express";
import { ResidentController } from "../controller/resident.controller";

const useRouter = Router();

useRouter.post("/", ResidentController.create);
useRouter.post("/:cpf", ResidentController.update);


export default useRouter;
