import { Request, Response } from "express";
import { VisitorService } from "../service/visitor.service";

export const VisitorController =  {
    async create(req: Request, res: Response) {
        const visitor = await VisitorService.create(req.body);
        return res.status(201).json(visitor);
    }
}
