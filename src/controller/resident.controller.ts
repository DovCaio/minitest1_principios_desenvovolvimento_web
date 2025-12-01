import { Request, Response } from "express";
import { ResidentService } from "../service/resident.service";

export const ResidentController =  {
    async create(req: Request, res: Response) {
        const resident = await ResidentService.create(req.body);
        return res.status(201).json(resident);
    }
}