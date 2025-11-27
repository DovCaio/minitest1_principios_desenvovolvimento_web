import { Router } from "express";
import { EmployeeControler } from "../controller/employee.controller";
import { asyncHandler } from "../utils/asyncHandler";

const useRouter = Router();

useRouter.post("/", EmployeeControler.create);
useRouter.put("/", EmployeeControler.update);
useRouter.get("/:id", EmployeeControler.get);
useRouter.delete("/:id", EmployeeControler.delete);

export default useRouter;
