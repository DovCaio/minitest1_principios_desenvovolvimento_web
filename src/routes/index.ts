import { Router } from "express";
import employeeRoutes from "./employee.route";
import { serviceRoutes } from "./serviceRequest.routes";

const routes = Router();

routes.use("/employee", employeeRoutes);
routes.use("/services", serviceRoutes);

export default routes;