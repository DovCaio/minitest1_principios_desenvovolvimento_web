import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { VisitorController } from "../controller/visitor.controller";

const useRouter = Router();

useRouter.post("/", VisitorController.create);

export default useRouter;