import { Request, Response } from "express";
import { EmployeeService } from "../service/employee.service";


export const EmployeeControler =  {
    async create(req: Request, res: Response) {
        const employee = await EmployeeService.create(req.body);
        return res.status(201).json(employee);
    },
    async update(req: Request, res: Response) {
        const employee = await EmployeeService.update(req.body);
        return res.status(200).json(employee);
    },
    async get(req: Request, res: Response) {
        const { id } = req.params;
        const employee = await EmployeeService.get(id);
        return res.status(200).json(employee);
    },
    async delete(req: Request, res: Response) {
        const { id } = req.params;
        await EmployeeService.delete(id);
        return res.status(204).send();
    }
}