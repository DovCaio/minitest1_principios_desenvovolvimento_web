import { Router } from "express";
import employeeRoutes from "./employee.route"

const routes = Router();

routes.use("/employee", employeeRoutes);

export default routes;
