import { UserCreateDTO } from "../dto/user/UserCreateDTO";
import prisma from "../prisma";
import { UserRepository } from "./user.repository"; 

export const ResidentRepository = {

    async create(data: UserCreateDTO) {

        const user = await UserRepository.create(data);
           
        return prisma.resident.create({
            data: {
                user: {
                    connect: { cpf: data.cpf }, 
                },
            },
            include: { user: true }
        });
    }
}