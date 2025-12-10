import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { VisitorController } from "../controller/visitor.controller";

const useRouter = Router();

useRouter.post("/", VisitorController.create);
useRouter.put("/:cpf", VisitorController.update);
useRouter.get("/:cpf", VisitorController.getOne);
useRouter.get("/", VisitorController.getAll);
useRouter.delete("/:cpf", VisitorController.delete);

export default useRouter;