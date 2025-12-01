import { Router } from "express";
import employeeRoutes from "./employee.route"
import lotRoute from "./lot.route"
import residentRoutes from "./resident.route"
const routes = Router();

routes.use("/employee", employeeRoutes);
routes.use("/lot", lotRoute);
routes.use("/resident", residentRoutes);

export default routes;
