import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { VisitorController } from "../controller/visitor.controller";

const useRouter = Router();

useRouter.post("/", VisitorController.create);
useRouter.put("/:cpf", VisitorController.update);

export default useRouter;